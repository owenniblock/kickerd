#!/usr/bin/env node
const bole = require('bole')
const path = require('path')
const kickerd = require('../src')
const DEFAULT_PREFIX = process.env.NODE_ENV || 'production'

const args = require('yargs') // eslint-disable-line
  .usage('$0 <in-file> [options]')
  .option('prefix', {
    alias: 'p',
    default: DEFAULT_PREFIX,
    description: 'the etcd prefix to use for all keys.'
  })
  .option('group', {
    alias: 'p',
    description: 'run the app with a different config group, e.g., replica vs. primary.'
  })
  .option('file', {
    alias: 'f',
    default: path.resolve(process.cwd(), '.kicker.toml'),
    description: 'the configuration file to use'
  })
  .option('bootstrap', {
    alias: 'b',
    default: false,
    description: 'create a bootstrap shell script instead of hosting the process directly',
    type: 'boolean'
  })
  .option('debug', {
    alias: 'd',
    default: false,
    description: 'print out environment values - AVOID IN PRODUCTION',
    type: 'boolean'
  })
  .option('etcd', {
    default: 'http://localhost:2379',
    description: 'the etcd URL to connect to'
  })
  .option('change-wait', {
    default: 10,
    description: 'seconds to wait after a change before restarting the service to apply configuration',
    type: 'number'
  })
  .option('lock-restart', {
    default: true,
    description: 'limit instance restarts to one at a time using an etcd',
    type: 'boolean'
  })
  .option('lock-ttl', {
    default: 5,
    description: 'seconds the restart lock will stay in etcd (prevents deadlocks)',
    type: 'number'
  })
  .help()
  .alias('help', 'h')
  .version()
  .argv

args.stdio = 'inherit'
const logStream = {
  write: function (data) {
    const entry = JSON.parse(data)
    if (!entry.message) {
      entry.message = JSON.stringify({
        name: entry.name,
        description: entry.description,
        start: entry.start,
        sets: entry.sets
      }, null, 2)
    }
    console.log(`${entry.time} - [${entry.level}] - ${entry.message}`)
  }
}

const logLevel = args.debug ? 'debug' : 'info'
bole.output({
  level: logLevel,
  stream: logStream
})

kickerd.kick(args)

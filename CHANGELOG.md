# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.4.4"></a>
## [1.4.4](https://github.com/npm-wharf/kickerd/compare/v1.4.3...v1.4.4) (2018-04-25)


### Bug Fixes

* prevent overwriting files with empty etcd keys ([6f469d2](https://github.com/npm-wharf/kickerd/commit/6f469d2))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/arobson/kickerd/compare/v1.4.2...v1.4.3) (2017-11-03)


### Bug Fixes

* correct problem with async call to node-etcd that allowed for random / non-deterministic key/value pairs to return when requesting values from a keyspace. ([cc17ef5](https://github.com/arobson/kickerd/commit/cc17ef5))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/arobson/kickerd/compare/v1.4.1...v1.4.2) (2017-10-31)


### Bug Fixes

* add missing argument to initialization from CLI ([be51168](https://github.com/arobson/kickerd/commit/be51168))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/arobson/kickerd/compare/v1.4.0...v1.4.1) (2017-10-31)


### Bug Fixes

* upgrade to 8-alpine for baseline container to address vulnerability. remove assumption that package.json is always present from config-mapper. ([4cb0234](https://github.com/arobson/kickerd/commit/4cb0234))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/arobson/kickerd/compare/v1.3.0...v1.4.0) (2017-10-30)


### Features

* add support for writing files from etcd keys ([bf0a11b](https://github.com/arobson/kickerd/commit/bf0a11b))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/arobson/kickerd/compare/v1.2.2...v1.3.0) (2017-07-31)


### Features

* add debounce for change to protect from crashes due to large sets of changes landing in a key space. ([c9310f5](https://github.com/arobson/kickerd/commit/c9310f5))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/arobson/kickerd/compare/v1.2.1...v1.2.2) (2017-07-20)


### Bug Fixes

* correct watch logic and add better logging around watch behavior ([5ac9471](https://github.com/arobson/kickerd/commit/5ac9471))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/arobson/kickerd/compare/v1.2.0...v1.2.1) (2017-07-12)


### Bug Fixes

* remove dependence on old approach to default values in environment map for process host ([4736f9f](https://github.com/arobson/kickerd/commit/4736f9f))
* set environment equal to '' rather than string 'undefined'; tighten up numeric regex ([6f2b520](https://github.com/arobson/kickerd/commit/6f2b520))
* tighten up number regex ([#2](https://github.com/arobson/kickerd/issues/2)) ([706c478](https://github.com/arobson/kickerd/commit/706c478))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/arobson/kickerd/compare/v1.1.0...v1.2.0) (2017-07-11)


### Bug Fixes

* didn't quite nail edge-cases ([cc70ed8](https://github.com/arobson/kickerd/commit/cc70ed8))


### Features

* allow for application level config, which overrides global config ([7513121](https://github.com/arobson/kickerd/commit/7513121))
* change watch implementation so that value will have the desired outcome based on specificity and ignore changes from lower levels ([46baf96](https://github.com/arobson/kickerd/commit/46baf96))
* improve configuration data structure for easier management of value precedent ([96946cb](https://github.com/arobson/kickerd/commit/96946cb))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/arobson/kickerd/compare/v1.0.0...v1.1.0) (2017-07-07)


### Features

* add support for arguments ([890176b](https://github.com/arobson/kickerd/commit/890176b))

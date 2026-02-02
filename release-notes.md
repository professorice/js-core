:robot: I have created a release *beep* *boop*
---


<details><summary>akamai-edgeworker-sdk-common: 3.0.0</summary>

## [3.0.0](https://github.com/professorice/js-core/compare/akamai-edgeworker-sdk-common-v2.0.12...akamai-edgeworker-sdk-common-v3.0.0) (2026-02-02)


###   BREAKING CHANGES

* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/professorice/js-core/issues/786))

### Features

* Add cacheTtlMs option ([#760](https://github.com/professorice/js-core/issues/760)) ([4f961dd](https://github.com/professorice/js-core/commit/4f961dd16fd10f5bb55dd2116d26b218944bfeb2))
* Add support for conditional event source capabilities. ([#577](https://github.com/professorice/js-core/issues/577)) ([fe82500](https://github.com/professorice/js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/professorice/js-core/issues/786)) ([48b48cf](https://github.com/professorice/js-core/commit/48b48cf69d518dc70a557ffd1dfb0209aee0b124))


### Bug Fixes

* Log errors when there is no error event handler. ([#495](https://github.com/professorice/js-core/issues/495)) ([6b73699](https://github.com/professorice/js-core/commit/6b73699061efa46cd291756d3932fcf78d480f40))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from ^2.17.1 to ^2.18.0
</details>

<details><summary>akamai-server-base-sdk: 4.0.0</summary>

## [4.0.0](https://github.com/professorice/js-core/compare/akamai-server-base-sdk-v3.0.13...akamai-server-base-sdk-v4.0.0) (2026-02-02)


###   BREAKING CHANGES

* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/professorice/js-core/issues/786))

### Features

* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/professorice/js-core/issues/786)) ([48b48cf](https://github.com/professorice/js-core/commit/48b48cf69d518dc70a557ffd1dfb0209aee0b124))


### Bug Fixes

* Use release-please to update SDK versions ([#1013](https://github.com/professorice/js-core/issues/1013)) ([d1d11f1](https://github.com/professorice/js-core/commit/d1d11f1feb29fc5ccbf14506aa374162d452be42))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/akamai-edgeworker-sdk-common bumped from ^2.0.12 to ^3.0.0
    * @launchdarkly/js-server-sdk-common bumped from ^2.17.1 to ^2.18.0
</details>

<details><summary>akamai-server-edgekv-sdk: 1.5.0</summary>

## [1.5.0](https://github.com/professorice/js-core/compare/akamai-server-edgekv-sdk-v1.4.15...akamai-server-edgekv-sdk-v1.5.0) (2026-02-02)


### Features

* Add cacheTtlMs option ([#760](https://github.com/professorice/js-core/issues/760)) ([4f961dd](https://github.com/professorice/js-core/commit/4f961dd16fd10f5bb55dd2116d26b218944bfeb2))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Upgrade edgekv bundled files to 0.6.3 ([#610](https://github.com/professorice/js-core/issues/610)) ([58dfec6](https://github.com/professorice/js-core/commit/58dfec68c268390852cc511191c7f9b47ec3e668))


### Bug Fixes

* Use release-please to update SDK versions ([#1013](https://github.com/professorice/js-core/issues/1013)) ([d1d11f1](https://github.com/professorice/js-core/commit/d1d11f1feb29fc5ccbf14506aa374162d452be42))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/akamai-edgeworker-sdk-common bumped from ^2.0.12 to ^3.0.0
    * @launchdarkly/js-server-sdk-common bumped from ^2.17.1 to ^2.18.0
</details>

<details><summary>browser: 0.1.3</summary>

## [0.1.3](https://github.com/professorice/js-core/compare/browser-v0.1.2...browser-v0.1.3) (2026-02-02)


### Bug Fixes

* update initialization method in combined browser SDK to createClient ([#1041](https://github.com/professorice/js-core/issues/1041)) ([9cc3f7f](https://github.com/professorice/js-core/commit/9cc3f7f451fc33c550564c61b36b234fc97b7f16))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk bumped from 0.13.0 to 0.14.0
</details>

<details><summary>browser-telemetry: 2.0.0</summary>

## [2.0.0](https://github.com/professorice/js-core/compare/browser-telemetry-v1.0.18...browser-telemetry-v2.0.0) (2026-02-02)


###   BREAKING CHANGES

* 1.0 Release for browser-telemetry.
* Updated AI config interface. ([#697](https://github.com/professorice/js-core/issues/697))

### Features

* 1.0 Release for browser-telemetry. ([681e423](https://github.com/professorice/js-core/commit/681e4230efb99abb1acb51de3a7d0265fddcd6e0))
* Add basic logging support for browser-telemetry. ([#736](https://github.com/professorice/js-core/issues/736)) ([2ef1486](https://github.com/professorice/js-core/commit/2ef14868ce581afbc5257448da13414a5ba1c100))
* Add browser telemetry options. ([#675](https://github.com/professorice/js-core/issues/675)) ([c8352b2](https://github.com/professorice/js-core/commit/c8352b21b678bb8f1063bb0c9df2e795c6cec8d5))
* Add browser-telemetry API types. ([#669](https://github.com/professorice/js-core/issues/669)) ([89967ee](https://github.com/professorice/js-core/commit/89967eec67da13951837f19b7671647fb96b2c8c))
* Add DOM collectors. ([#672](https://github.com/professorice/js-core/issues/672)) ([4473a06](https://github.com/professorice/js-core/commit/4473a06145b09205f1b03d31a2215b9c3b6d75c2))
* Add http collectors. ([#673](https://github.com/professorice/js-core/issues/673)) ([6e60ddc](https://github.com/professorice/js-core/commit/6e60ddc6932341ace2d16ace688d7774bc6340d4))
* Add singleton support for browser-telemetry. ([#739](https://github.com/professorice/js-core/issues/739)) ([68a3b87](https://github.com/professorice/js-core/commit/68a3b87fcc9600a7f64e7e2e1a15c12b9c370f25))
* Add stack trace parsing. ([#676](https://github.com/professorice/js-core/issues/676)) ([ca1dd49](https://github.com/professorice/js-core/commit/ca1dd49e596c73e807388cefcae36e956b3477a0))
* Add support for breadcrumb filtering. ([#733](https://github.com/professorice/js-core/issues/733)) ([5c327a1](https://github.com/professorice/js-core/commit/5c327a1c42625ec606a8599f59d58a1686f050e1))
* Add support for filtering username/password URL authority. ([#751](https://github.com/professorice/js-core/issues/751)) ([62ab9fb](https://github.com/professorice/js-core/commit/62ab9fb774847b5d953041f29b5f997629f86fa7))
* Add support for the session init event. ([320c07d](https://github.com/professorice/js-core/commit/320c07d852a8902523c290a5249f92efffd89dde))
* Add the ability to filter errors. ([#743](https://github.com/professorice/js-core/issues/743)) ([5cffb2b](https://github.com/professorice/js-core/commit/5cffb2b5216f94941498ebb6bb783d0a8841d566))
* Export browser-telemetry initialization method. ([d1b364e](https://github.com/professorice/js-core/commit/d1b364eaf08502b8b7d65c124833b617577fd081))
* Implement browser telemetry client. ([#691](https://github.com/professorice/js-core/issues/691)) ([db74a99](https://github.com/professorice/js-core/commit/db74a99c736c00521f317c1fcddb2d1038c01c1c))
* Make browser-telemetry specific inspector type. ([#741](https://github.com/professorice/js-core/issues/741)) ([14ecdb3](https://github.com/professorice/js-core/commit/14ecdb3570b04ee26c38f361bfa2db948c843fef))
* Option to disable all breadcrumbs and stack. ([#770](https://github.com/professorice/js-core/issues/770)) ([2c51838](https://github.com/professorice/js-core/commit/2c51838f84a6c21ab38b12d960117d8ed801a114))
* Random uuid for telemetry package. ([#689](https://github.com/professorice/js-core/issues/689)) ([4cf34f9](https://github.com/professorice/js-core/commit/4cf34f94f9d1a1949462187d09e7d84b096edb15))
* Rename initializeTelemetryInstance to initTelemetryInstance for consistency with initTelemetry. ([257734f](https://github.com/professorice/js-core/commit/257734f74d5c36d9e68441d6ca7dd7d1a6a2ba9b))
* Source maps with inline sources for browser-telemetry. ([#735](https://github.com/professorice/js-core/issues/735)) ([1656a85](https://github.com/professorice/js-core/commit/1656a856e412a661af26ed08620aebedf2064ae1))
* Updated AI config interface. ([#697](https://github.com/professorice/js-core/issues/697)) ([cd72ea8](https://github.com/professorice/js-core/commit/cd72ea8193888b0635b5beffa0a877b18294777e))
* Vendor TraceKit ([d1b364e](https://github.com/professorice/js-core/commit/d1b364eaf08502b8b7d65c124833b617577fd081))


### Bug Fixes

* Clear pending events buffer when registered. ([#727](https://github.com/professorice/js-core/issues/727)) ([b6ad7df](https://github.com/professorice/js-core/commit/b6ad7dfe1e16122ca16b6304e1a7b1c362cf2156))
* Export BrowserTelemetry, BrowserTelemetryInspector, and ImplementsCrumb. ([257734f](https://github.com/professorice/js-core/commit/257734f74d5c36d9e68441d6ca7dd7d1a6a2ba9b))
* Fix a bug where the incorrect src lines may have been captured. ([#792](https://github.com/professorice/js-core/issues/792)) ([1f44dd5](https://github.com/professorice/js-core/commit/1f44dd5bad3cc108beda5fb23d9b2b540812e7e6))
* Fix breadcrumb filter option parsing. ([#742](https://github.com/professorice/js-core/issues/742)) ([833f4ce](https://github.com/professorice/js-core/commit/833f4ce18b53c31a042316768cfeb4118746857e))
* Fix issue processing URLs for fetch and XHR requests. ([#783](https://github.com/professorice/js-core/issues/783)) ([32cec6a](https://github.com/professorice/js-core/commit/32cec6af00384e7496832ba87a3005b26558c528))
* Fix race condition with client registration. ([#750](https://github.com/professorice/js-core/issues/750)) ([d2ac2e2](https://github.com/professorice/js-core/commit/d2ac2e230118b573b4e90b5781350067c7920fcf))
* Remove BrowserTelemetry until more types are available. ([#671](https://github.com/professorice/js-core/issues/671)) ([796b8a3](https://github.com/professorice/js-core/commit/796b8a379e23b3345b1b5db3e324372570993603))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/js-client-sdk bumped from 0.13.0 to 0.14.0
</details>

<details><summary>cloudflare-server-sdk: 2.8.0</summary>

## [2.8.0](https://github.com/professorice/js-core/compare/cloudflare-server-sdk-v2.7.12...cloudflare-server-sdk-v2.8.0) (2026-02-02)


### Features

* Add TTL caching for data store ([#801](https://github.com/professorice/js-core/issues/801)) ([c1de485](https://github.com/professorice/js-core/commit/c1de4850c81dff8ad52276c2bfc2a2aeb87bd2d9))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))


### Bug Fixes

* cloudflare-server-sdk exports to support using migrations ([#854](https://github.com/professorice/js-core/issues/854)) ([3366775](https://github.com/professorice/js-core/commit/33667756b9aef26ad10062f02299597aa5552ac1))
* Include name and version in platform. ([#453](https://github.com/professorice/js-core/issues/453)) ([3b4e212](https://github.com/professorice/js-core/commit/3b4e212a563e5dc8b4953fadb6b31160076ec001))
* Remove bundled dependency from package.json. ([#711](https://github.com/professorice/js-core/issues/711)) ([0fb5375](https://github.com/professorice/js-core/commit/0fb5375443a5137c3588d454465794eb530cb982))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common-edge bumped from 2.6.11 to 2.7.0
</details>

<details><summary>fastly-server-sdk: 0.3.0</summary>

## [0.3.0](https://github.com/professorice/js-core/compare/fastly-server-sdk-v0.2.4...fastly-server-sdk-v0.3.0) (2026-02-02)


### Features

* Add Fastly Edge SDK ([#723](https://github.com/professorice/js-core/issues/723)) ([02e0eee](https://github.com/professorice/js-core/commit/02e0eeea8678e66911eb28c5ccca59e4956a1457))
* Improve KV data caching and deserialization ([#903](https://github.com/professorice/js-core/issues/903)) ([ae47860](https://github.com/professorice/js-core/commit/ae4786096c34829745070ed2a69a6d964be46e4d))


### Bug Fixes

* Remove logging of SDK option configurations ([#806](https://github.com/professorice/js-core/issues/806)) ([a76d196](https://github.com/professorice/js-core/commit/a76d19690a7ef5932c36bfc974affc0a192c2d4f))
* Use release-please to update SDK versions ([#1013](https://github.com/professorice/js-core/issues/1013)) ([d1d11f1](https://github.com/professorice/js-core/commit/d1d11f1feb29fc5ccbf14506aa374162d452be42))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.17.1 to 2.18.0
</details>

<details><summary>jest: 0.3.0</summary>

## [0.3.0](https://github.com/professorice/js-core/compare/jest-v0.2.2...jest-v0.3.0) (2026-02-02)


### Features

* add waitForInitialization to RN SDK ([#1048](https://github.com/professorice/js-core/issues/1048)) ([13ce456](https://github.com/professorice/js-core/commit/13ce456d9e3a5bcf043734f757415d4856034257))
* Implement jest mocks for react-native. ([#535](https://github.com/professorice/js-core/issues/535)) ([aee09c8](https://github.com/professorice/js-core/commit/aee09c87e1810795108157dcd9ab8cfb9fe05020))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/react-native-client-sdk bumped from ~10.12.6 to ~10.13.0
</details>

<details><summary>js-client-sdk: 0.14.0</summary>

## [0.14.0](https://github.com/professorice/js-core/compare/js-client-sdk-v0.13.0...js-client-sdk-v0.14.0) (2026-02-02)


###   BREAKING CHANGES

* remove 3.x compatability layer ([#1063](https://github.com/professorice/js-core/issues/1063))
* align browser v4 intialization flow to specs ([#1040](https://github.com/professorice/js-core/issues/1040))
* Only support identify with result. ([#1000](https://github.com/professorice/js-core/issues/1000))

### Features

* Add a module for increased backward compatibility. ([#637](https://github.com/professorice/js-core/issues/637)) ([44a2237](https://github.com/professorice/js-core/commit/44a223730fed10fbd75e8de7c87c63570774fe96))
* Add basic secure mode support for browser SDK. ([#598](https://github.com/professorice/js-core/issues/598)) ([3389983](https://github.com/professorice/js-core/commit/33899830781affbe986f3bb9df35e5c908884f99))
* Add bootstrap support. ([#600](https://github.com/professorice/js-core/issues/600)) ([4e5dbee](https://github.com/professorice/js-core/commit/4e5dbee48d6bb236b5febd872c910e809058a012))
* Add browser info. ([#576](https://github.com/professorice/js-core/issues/576)) ([a2f4398](https://github.com/professorice/js-core/commit/a2f439813171527e05f5863afbda3fcb93fedb47))
* Add client-side SDK plugin support. ([#834](https://github.com/professorice/js-core/issues/834)) ([a843a33](https://github.com/professorice/js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add ESM support for common and common-client (rollup) ([#604](https://github.com/professorice/js-core/issues/604)) ([8cd0cdc](https://github.com/professorice/js-core/commit/8cd0cdce988f606b1efdf6bfd19484f6607db2e5))
* add initial polling retries to BrowserDataManager ([#1030](https://github.com/professorice/js-core/issues/1030)) ([cd91013](https://github.com/professorice/js-core/commit/cd910130cabb210b13f1dbb7e48cc179347bb05a))
* add legacy storage key cleanup functionality ([#1043](https://github.com/professorice/js-core/issues/1043)) ([fe4725e](https://github.com/professorice/js-core/commit/fe4725e24917fe795cee448383b4fe8fa8b4b56f))
* Add prerequisite information to server-side allFlagsState. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for an identify queue. ([#842](https://github.com/professorice/js-core/issues/842)) ([78e9a5e](https://github.com/professorice/js-core/commit/78e9a5e93cb4c06a19c0d7d63307dfd3407d4505))
* Add support for browser contract tests. ([#582](https://github.com/professorice/js-core/issues/582)) ([38f081e](https://github.com/professorice/js-core/commit/38f081ebf04c68123cf83addefbcbfec692cac16))
* Add support for client-side prerequisite events. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for hooks. ([#605](https://github.com/professorice/js-core/issues/605)) ([04d347b](https://github.com/professorice/js-core/commit/04d347b25e01015134a2545be22bfd8b1d1e85cc))
* Add support for inspectors. ([#625](https://github.com/professorice/js-core/issues/625)) ([a986478](https://github.com/professorice/js-core/commit/a986478ed8e39d0f529ca6adec0a09b484421390))
* Add support for js-client-sdk style initialization. ([53f5bb8](https://github.com/professorice/js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* Add support for localStorage for the browser platform. ([#566](https://github.com/professorice/js-core/issues/566)) ([4792391](https://github.com/professorice/js-core/commit/4792391d1ae06f5d5afc7f7ab56608df6b1909c4))
* Add support for per-context summary events. ([#859](https://github.com/professorice/js-core/issues/859)) ([c9fa5c4](https://github.com/professorice/js-core/commit/c9fa5c45f3ac2cbaad2f2e6312d5231c3f671d98))
* Add support for prerequisite details to evaluation detail. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add URLs for custom events and URL filtering. ([#587](https://github.com/professorice/js-core/issues/587)) ([7131e69](https://github.com/professorice/js-core/commit/7131e6905f19cc10a1374aae5e74cec66c7fd6de))
* Add visibility handling to allow proactive event flushing. ([#607](https://github.com/professorice/js-core/issues/607)) ([819a311](https://github.com/professorice/js-core/commit/819a311db6f56e323bb84c925789ad4bd19ae4ba))
* add waitForInitialization to RN SDK ([#1048](https://github.com/professorice/js-core/issues/1048)) ([13ce456](https://github.com/professorice/js-core/commit/13ce456d9e3a5bcf043734f757415d4856034257))
* adding support for debug override plugins ([#1033](https://github.com/professorice/js-core/issues/1033)) ([17f5e7d](https://github.com/professorice/js-core/commit/17f5e7d7d11d502d54a6ccf88aea6bec3e4b775c))
* adds datasource status to sdk-client ([#590](https://github.com/professorice/js-core/issues/590)) ([6f26204](https://github.com/professorice/js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* adds ping stream support ([#624](https://github.com/professorice/js-core/issues/624)) ([dee53af](https://github.com/professorice/js-core/commit/dee53af9312b74a70b748d49b2d2911d65333cf3))
* Adds support for REPORT. ([#575](https://github.com/professorice/js-core/issues/575)) ([916b724](https://github.com/professorice/js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* allow clients to evaluate bootstrapped flags when not ready ([#1036](https://github.com/professorice/js-core/issues/1036)) ([9b4542a](https://github.com/professorice/js-core/commit/9b4542a722e5d19e123e860faef113d134dad47c))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Browser-SDK Automatically start streaming based on event handlers. ([#592](https://github.com/professorice/js-core/issues/592)) ([f2e5cbf](https://github.com/professorice/js-core/commit/f2e5cbf1d0b3ae39a95881fecdcbefc11e9d0363))
* Enable source maps with inlined sources for browser SDK. ([#734](https://github.com/professorice/js-core/issues/734)) ([c2a87b1](https://github.com/professorice/js-core/commit/c2a87b11d1eeb31bf0423e3d7dfc8e99fc940c99))
* Enhance basic logger destination support. ([#650](https://github.com/professorice/js-core/issues/650)) ([21670c4](https://github.com/professorice/js-core/commit/21670c4acd629f7ccfeb7abbe94fe89723533600))
* implement `waitForInitialization` for browser sdk 4.x ([#1028](https://github.com/professorice/js-core/issues/1028)) ([156532a](https://github.com/professorice/js-core/commit/156532aea3ec39635dab21dbab125c81fc31a3f5))
* Implement browser crypto and encoding. ([#574](https://github.com/professorice/js-core/issues/574)) ([e763e5d](https://github.com/professorice/js-core/commit/e763e5d2e53329c0f86b93544af85ca7a94e7936))
* Implement goals for client-side SDKs. ([#585](https://github.com/professorice/js-core/issues/585)) ([fd38a8f](https://github.com/professorice/js-core/commit/fd38a8fa8560dad0c6721c2eaeed2f3f5c674900))
* Implement support for browser requests. ([#578](https://github.com/professorice/js-core/issues/578)) ([887548a](https://github.com/professorice/js-core/commit/887548a29e22a618d44a6941c175f33402e331bf))
* Only support identify with result. ([#1000](https://github.com/professorice/js-core/issues/1000)) ([7163adf](https://github.com/professorice/js-core/commit/7163adf06b5084d47b61658e5b30fab002d7fc80))
* Refactor data source connection handling.  ([53f5bb8](https://github.com/professorice/js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* Refine CJS/ESM build configuration for browser SDK. ([#640](https://github.com/professorice/js-core/issues/640)) ([ec4377c](https://github.com/professorice/js-core/commit/ec4377cc2afc62455aba769c20f3831cccd50250))
* remove 3.x compatability layer ([#1063](https://github.com/professorice/js-core/issues/1063)) ([a471805](https://github.com/professorice/js-core/commit/a471805924784fd80ce7a60c7c4df1d967cfb117))
* Scaffold browser client. ([#579](https://github.com/professorice/js-core/issues/579)) ([0848ab7](https://github.com/professorice/js-core/commit/0848ab790903f8fcdc717de6c426e4948abe51c4))
* Support inline context for custom and migration events ([6aadf04](https://github.com/professorice/js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))
* Vendor escapeStringRegexp to simplify builds. ([48cac54](https://github.com/professorice/js-core/commit/48cac546f6d36a6b70f3b1f7cb72d1dcff2b50ba))


### Bug Fixes

* Client SDKs should use wrapper information. ([#836](https://github.com/professorice/js-core/issues/836)) ([1e0cf6a](https://github.com/professorice/js-core/commit/1e0cf6a0f77f8cfe6a7a0e675fc6490ea52a5b07))
* Consolidate common exports between base package and compat package. ([#674](https://github.com/professorice/js-core/issues/674)) ([f692050](https://github.com/professorice/js-core/commit/f69205082d83318e2772d027d6ea533de3ce5eb1))
* Deprecate LDMigrationOpEvent.contextKeys in favor of LDMigrationOpEvent.context ([6aadf04](https://github.com/professorice/js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))
* Do not mangle _meta. ([#622](https://github.com/professorice/js-core/issues/622)) ([f6fc40b](https://github.com/professorice/js-core/commit/f6fc40bc518d175d18d556b8c22e3c924ed25bbd))
* Ensure browser contract tests run during top-level build. ([#589](https://github.com/professorice/js-core/issues/589)) ([7dfb14d](https://github.com/professorice/js-core/commit/7dfb14de1757b66d9f876b25d4c1262e8f8b70c9))
* Ensure client logger is always wrapped in a safe logger. ([#599](https://github.com/professorice/js-core/issues/599)) ([980e4da](https://github.com/professorice/js-core/commit/980e4daaf32864e18f14b1e5e28e308dff0ae94f))
* Ensure streaming connection is closed on SDK close. ([#774](https://github.com/professorice/js-core/issues/774)) ([f58e746](https://github.com/professorice/js-core/commit/f58e746a089fb0cd5f6169f6c246e1f6515f5047))
* Export correct options for compat. ([#678](https://github.com/professorice/js-core/issues/678)) ([8d8250c](https://github.com/professorice/js-core/commit/8d8250cafb20b60e45ac3661fd8b079cb62fb83e))
* Export LDInspection interface. ([#653](https://github.com/professorice/js-core/issues/653)) ([7f58b2a](https://github.com/professorice/js-core/commit/7f58b2aa947f85c5b3c2462882ccb52a9dbb8ce5))
* Export required types from compat. ([#645](https://github.com/professorice/js-core/issues/645)) ([008dcf0](https://github.com/professorice/js-core/commit/008dcf0e7693b47d2079badad5ba038c0f9e82fe))
* Handle default flush interval for browser SDK. ([#822](https://github.com/professorice/js-core/issues/822)) ([2c1cc7a](https://github.com/professorice/js-core/commit/2c1cc7a117fd011a329dfcc5332fddf7fd11eff9))
* update LDClient to not require context key for client side identify methods ([#1045](https://github.com/professorice/js-core/issues/1045)) ([0cf7660](https://github.com/professorice/js-core/commit/0cf76600af7fb5b3ef42d4e2b4cb73a27443a5e3))


### Code Refactoring

* align browser v4 intialization flow to specs ([#1040](https://github.com/professorice/js-core/issues/1040)) ([eff6a55](https://github.com/professorice/js-core/commit/eff6a55163508bee4f2dec574ad256f88ec513d6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.17.2 to 1.18.0
</details>

<details><summary>js-client-sdk-common: 1.18.0</summary>

## [1.18.0](https://github.com/professorice/js-core/compare/js-client-sdk-common-v1.17.2...js-client-sdk-common-v1.18.0) (2026-02-02)


### Features

* Add a module for increased backward compatibility. ([#637](https://github.com/professorice/js-core/issues/637)) ([44a2237](https://github.com/professorice/js-core/commit/44a223730fed10fbd75e8de7c87c63570774fe96))
* Add basic secure mode support for browser SDK. ([#598](https://github.com/professorice/js-core/issues/598)) ([3389983](https://github.com/professorice/js-core/commit/33899830781affbe986f3bb9df35e5c908884f99))
* Add bootstrap support. ([#600](https://github.com/professorice/js-core/issues/600)) ([4e5dbee](https://github.com/professorice/js-core/commit/4e5dbee48d6bb236b5febd872c910e809058a012))
* Add client-side SDK plugin support. ([#834](https://github.com/professorice/js-core/issues/834)) ([a843a33](https://github.com/professorice/js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add connection mananger. ([#522](https://github.com/professorice/js-core/issues/522)) ([5bf8b16](https://github.com/professorice/js-core/commit/5bf8b16e26e7d8cbbd18524f1c13f773de457b82))
* Add ESM support for common and common-client (rollup) ([#604](https://github.com/professorice/js-core/issues/604)) ([8cd0cdc](https://github.com/professorice/js-core/commit/8cd0cdce988f606b1efdf6bfd19484f6607db2e5))
* Add hook support for the track series. ([#827](https://github.com/professorice/js-core/issues/827)) ([1519cb9](https://github.com/professorice/js-core/commit/1519cb98b55f4e6a391da7adefddd8ac90e9258c))
* Add identify timeout to client-sdk. ([#420](https://github.com/professorice/js-core/issues/420)) ([5d73dfe](https://github.com/professorice/js-core/commit/5d73dfeb0d5cdacf620e65e214dd2e334363490e))
* add legacy storage key cleanup functionality ([#1043](https://github.com/professorice/js-core/issues/1043)) ([fe4725e](https://github.com/professorice/js-core/commit/fe4725e24917fe795cee448383b4fe8fa8b4b56f))
* Add platform support for async hashing. ([#573](https://github.com/professorice/js-core/issues/573)) ([9248035](https://github.com/professorice/js-core/commit/9248035a88fba1c7375c5df22ef6b4a80a867983))
* Add prerequisite information to server-side allFlagsState. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for an identify queue. ([#842](https://github.com/professorice/js-core/issues/842)) ([78e9a5e](https://github.com/professorice/js-core/commit/78e9a5e93cb4c06a19c0d7d63307dfd3407d4505))
* Add support for client-side prerequisite events. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for conditional event source capabilities. ([#577](https://github.com/professorice/js-core/issues/577)) ([fe82500](https://github.com/professorice/js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for hooks. ([#605](https://github.com/professorice/js-core/issues/605)) ([04d347b](https://github.com/professorice/js-core/commit/04d347b25e01015134a2545be22bfd8b1d1e85cc))
* Add support for inspectors. ([#625](https://github.com/professorice/js-core/issues/625)) ([a986478](https://github.com/professorice/js-core/commit/a986478ed8e39d0f529ca6adec0a09b484421390))
* Add support for js-client-sdk style initialization. ([53f5bb8](https://github.com/professorice/js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* Add support for Payload Filtering ([#551](https://github.com/professorice/js-core/issues/551)) ([6f44383](https://github.com/professorice/js-core/commit/6f4438323baed802d8f951ac82494e6cfa9932c5))
* Add support for per-context summary events. ([#859](https://github.com/professorice/js-core/issues/859)) ([c9fa5c4](https://github.com/professorice/js-core/commit/c9fa5c45f3ac2cbaad2f2e6312d5231c3f671d98))
* Add support for prerequisite details to evaluation detail. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add URLs for custom events and URL filtering. ([#587](https://github.com/professorice/js-core/issues/587)) ([7131e69](https://github.com/professorice/js-core/commit/7131e6905f19cc10a1374aae5e74cec66c7fd6de))
* Add visibility handling to allow proactive event flushing. ([#607](https://github.com/professorice/js-core/issues/607)) ([819a311](https://github.com/professorice/js-core/commit/819a311db6f56e323bb84c925789ad4bd19ae4ba))
* add waitForInitialization to RN SDK ([#1048](https://github.com/professorice/js-core/issues/1048)) ([13ce456](https://github.com/professorice/js-core/commit/13ce456d9e3a5bcf043734f757415d4856034257))
* adding support for debug override plugins ([#1033](https://github.com/professorice/js-core/issues/1033)) ([17f5e7d](https://github.com/professorice/js-core/commit/17f5e7d7d11d502d54a6ccf88aea6bec3e4b775c))
* adds datasource status to sdk-client ([#590](https://github.com/professorice/js-core/issues/590)) ([6f26204](https://github.com/professorice/js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* adds ping stream support ([#624](https://github.com/professorice/js-core/issues/624)) ([dee53af](https://github.com/professorice/js-core/commit/dee53af9312b74a70b748d49b2d2911d65333cf3))
* adds support for individual flag change listeners ([#608](https://github.com/professorice/js-core/issues/608)) ([da31436](https://github.com/professorice/js-core/commit/da3143654331d7d2fd8ba76d9d995855dbf6c7a1))
* Adds support for REPORT. ([#575](https://github.com/professorice/js-core/issues/575)) ([916b724](https://github.com/professorice/js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* allow clients to evaluate bootstrapped flags when not ready ([#1036](https://github.com/professorice/js-core/issues/1036)) ([9b4542a](https://github.com/professorice/js-core/commit/9b4542a722e5d19e123e860faef113d134dad47c))
* Allow using custom user-agent name. ([#580](https://github.com/professorice/js-core/issues/580)) ([ed5a206](https://github.com/professorice/js-core/commit/ed5a206c86f496942664dd73f6f8a7c602a1de28))
* Allow waiting for the network response on identify. ([#548](https://github.com/professorice/js-core/issues/548)) ([1375660](https://github.com/professorice/js-core/commit/1375660afe39204205344e62ffc1ba3fbcce3950))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Browser-SDK Automatically start streaming based on event handlers. ([#592](https://github.com/professorice/js-core/issues/592)) ([f2e5cbf](https://github.com/professorice/js-core/commit/f2e5cbf1d0b3ae39a95881fecdcbefc11e9d0363))
* Correct client evaluation typings. ([#554](https://github.com/professorice/js-core/issues/554)) ([64ab88d](https://github.com/professorice/js-core/commit/64ab88d278308564b4cd7b6433870c7adb09142a))
* Enhance basic logger destination support. ([#650](https://github.com/professorice/js-core/issues/650)) ([21670c4](https://github.com/professorice/js-core/commit/21670c4acd629f7ccfeb7abbe94fe89723533600))
* implement `waitForInitialization` for browser sdk 4.x ([#1028](https://github.com/professorice/js-core/issues/1028)) ([156532a](https://github.com/professorice/js-core/commit/156532aea3ec39635dab21dbab125c81fc31a3f5))
* Implement goals for client-side SDKs. ([#585](https://github.com/professorice/js-core/issues/585)) ([fd38a8f](https://github.com/professorice/js-core/commit/fd38a8fa8560dad0c6721c2eaeed2f3f5c674900))
* Implement polling support. ([#524](https://github.com/professorice/js-core/issues/524)) ([a99048e](https://github.com/professorice/js-core/commit/a99048e0cebaafd536f79114c4727524b8f7357d))
* Make timeout optional in LDIdentifyOptions. ([#552](https://github.com/professorice/js-core/issues/552)) ([fa247b2](https://github.com/professorice/js-core/commit/fa247b2db821d11c8360752ba5f28b4ecff493c7))
* Refactor application state handling. ([#523](https://github.com/professorice/js-core/issues/523)) ([f5b81e6](https://github.com/professorice/js-core/commit/f5b81e6fc571dc9d97a18d07f382c77cd938fd65))
* Refactor data source connection handling.  ([53f5bb8](https://github.com/professorice/js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* refactors the implementation of context caching.  You can now s& ([#531](https://github.com/professorice/js-core/issues/531)) ([8ab2ee4](https://github.com/professorice/js-core/commit/8ab2ee425a35350a4f1c50e608c39fa3527da513))
* Remove event target shim. ([#545](https://github.com/professorice/js-core/issues/545)) ([448ad67](https://github.com/professorice/js-core/commit/448ad67815b9ec29abd322ed8483b2367147b146)), closes [#412](https://github.com/professorice/js-core/issues/412)
* Remove mock fetch from mocks. ([#525](https://github.com/professorice/js-core/issues/525)) ([fa8e579](https://github.com/professorice/js-core/commit/fa8e579b150770721347a173b4a65b3102d6b347))


### Bug Fixes

* Adjust identify timeout message. ([#447](https://github.com/professorice/js-core/issues/447)) ([7fc4f2f](https://github.com/professorice/js-core/commit/7fc4f2fab7faab4d3b969044e6e9524c59af69d9))
* browser logging for non-existing flags ([#1054](https://github.com/professorice/js-core/issues/1054)) ([f87b418](https://github.com/professorice/js-core/commit/f87b418ff63866199667be2d7a49e1dc22156b44))
* Correct documentation for variationDetail for client SDKs. ([#509](https://github.com/professorice/js-core/issues/509)) ([496e39f](https://github.com/professorice/js-core/commit/496e39f54a4437866dd1ab4050fd5522cfc78f23))
* Discard events from closed connections. ([#867](https://github.com/professorice/js-core/issues/867)) ([8119afe](https://github.com/professorice/js-core/commit/8119afe855f0ae5760341bf73123dbb6a79dcf15))
* Ensure client logger is always wrapped in a safe logger. ([#599](https://github.com/professorice/js-core/issues/599)) ([980e4da](https://github.com/professorice/js-core/commit/980e4daaf32864e18f14b1e5e28e308dff0ae94f))
* Ensure flag-detail-changed is called for deleted flags. ([#695](https://github.com/professorice/js-core/issues/695)) ([6524030](https://github.com/professorice/js-core/commit/6524030b41263a584b22211fcbbad10919582f1b))
* Ensure streaming connection is closed on SDK close. ([#774](https://github.com/professorice/js-core/issues/774)) ([f58e746](https://github.com/professorice/js-core/commit/f58e746a089fb0cd5f6169f6c246e1f6515f5047))
* evaluation detail type should be optional ([#1064](https://github.com/professorice/js-core/issues/1064)) ([e81c333](https://github.com/professorice/js-core/commit/e81c333034f2e8206dfaf70d6fdb6001747b777f))
* Export LDInspection interface. ([#653](https://github.com/professorice/js-core/issues/653)) ([7f58b2a](https://github.com/professorice/js-core/commit/7f58b2aa947f85c5b3c2462882ccb52a9dbb8ce5))
* Fix field visibility. ([#530](https://github.com/professorice/js-core/issues/530)) ([21fb18b](https://github.com/professorice/js-core/commit/21fb18b40139583b44a4185fb689b043547641ab))
* Flag store should not access values from prototype. ([#567](https://github.com/professorice/js-core/issues/567)) ([fca4d92](https://github.com/professorice/js-core/commit/fca4d9293746d023a0a122110849bbf335aa3b62))
* Identify incorrectly rejected in client-sdk ([#426](https://github.com/professorice/js-core/issues/426)) ([a019dd6](https://github.com/professorice/js-core/commit/a019dd66b1b852d888e10b78aec9693d7de195fe))
* Prerequisites should not trigger hooks. ([#628](https://github.com/professorice/js-core/issues/628)) ([70cf3c3](https://github.com/professorice/js-core/commit/70cf3c3cdc507b6df3597ea4954645bb2cc760df))
* Produce a warning when track is called with a non-numeric metric value. ([#449](https://github.com/professorice/js-core/issues/449)) ([6799742](https://github.com/professorice/js-core/commit/6799742a7914d32b3313e54408f0a2a3dda3ff5c))
* update LDClient to not require context key for client side identify methods ([#1045](https://github.com/professorice/js-core/issues/1045)) ([0cf7660](https://github.com/professorice/js-core/commit/0cf76600af7fb5b3ef42d4e2b4cb73a27443a5e3))
* Update sdk-client rollup configuration to match common ([#630](https://github.com/professorice/js-core/issues/630)) ([e061811](https://github.com/professorice/js-core/commit/e06181158d29824ff0131a88988c84cd4a32f6c0))
* Use flag value whenever provided even if variaiton is null or undefined. ([#581](https://github.com/professorice/js-core/issues/581)) ([d11224c](https://github.com/professorice/js-core/commit/d11224c64863c007f4f42f4c48683fd170dd2b32))
* Use flagVersion in analytics events. ([#611](https://github.com/professorice/js-core/issues/611)) ([35fa033](https://github.com/professorice/js-core/commit/35fa0332dc1553c82afd75c9a4770a4833f2dca3))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-sdk-common bumped from 2.20.0 to 2.21.0
</details>

<details><summary>js-sdk-common: 2.21.0</summary>

## [2.21.0](https://github.com/professorice/js-core/compare/js-sdk-common-v2.20.0...js-sdk-common-v2.21.0) (2026-02-02)


### Features

* Add client-side SDK plugin support. ([#834](https://github.com/professorice/js-core/issues/834)) ([a843a33](https://github.com/professorice/js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add ESM support for common and common-client (rollup) ([#604](https://github.com/professorice/js-core/issues/604)) ([8cd0cdc](https://github.com/professorice/js-core/commit/8cd0cdce988f606b1efdf6bfd19484f6607db2e5))
* add FDv2 FileDataSource initializer ([#1010](https://github.com/professorice/js-core/issues/1010)) ([99931f0](https://github.com/professorice/js-core/commit/99931f0706c0202390e3b68e3701ba0fb8aba124))
* Add identify timeout to client-sdk. ([#420](https://github.com/professorice/js-core/issues/420)) ([5d73dfe](https://github.com/professorice/js-core/commit/5d73dfeb0d5cdacf620e65e214dd2e334363490e))
* Add platform support for async hashing. ([#573](https://github.com/professorice/js-core/issues/573)) ([9248035](https://github.com/professorice/js-core/commit/9248035a88fba1c7375c5df22ef6b4a80a867983))
* Add support for a cancel-able timeout. ([#476](https://github.com/professorice/js-core/issues/476)) ([24ecf1d](https://github.com/professorice/js-core/commit/24ecf1d74b01e1fb32cd250689f17f96d1af1f50))
* Add support for conditional event source capabilities. ([#577](https://github.com/professorice/js-core/issues/577)) ([fe82500](https://github.com/professorice/js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for Payload Filtering ([#551](https://github.com/professorice/js-core/issues/551)) ([6f44383](https://github.com/professorice/js-core/commit/6f4438323baed802d8f951ac82494e6cfa9932c5))
* Add support for per-context summary events. ([#859](https://github.com/professorice/js-core/issues/859)) ([c9fa5c4](https://github.com/professorice/js-core/commit/c9fa5c45f3ac2cbaad2f2e6312d5231c3f671d98))
* Add URLs for custom events and URL filtering. ([#587](https://github.com/professorice/js-core/issues/587)) ([7131e69](https://github.com/professorice/js-core/commit/7131e6905f19cc10a1374aae5e74cec66c7fd6de))
* Add visibility handling to allow proactive event flushing. ([#607](https://github.com/professorice/js-core/issues/607)) ([819a311](https://github.com/professorice/js-core/commit/819a311db6f56e323bb84c925789ad4bd19ae4ba))
* additional FDv2 functionality ([#898](https://github.com/professorice/js-core/issues/898)) ([9ede15c](https://github.com/professorice/js-core/commit/9ede15c757ed1b8c57b090716d44cf60a03da409))
* adds datasource status to sdk-client ([#590](https://github.com/professorice/js-core/issues/590)) ([6f26204](https://github.com/professorice/js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* Adds StreamingProcessor for FDv2 to sdk-server package. ([#707](https://github.com/professorice/js-core/issues/707)) ([7f5c275](https://github.com/professorice/js-core/commit/7f5c2750dcc8341d049d7e736ca21ec36e168703))
* Adds support for REPORT. ([#575](https://github.com/professorice/js-core/issues/575)) ([916b724](https://github.com/professorice/js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* Allow using custom user-agent name. ([#580](https://github.com/professorice/js-core/issues/580)) ([ed5a206](https://github.com/professorice/js-core/commit/ed5a206c86f496942664dd73f6f8a7c602a1de28))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Correct client evaluation typings. ([#554](https://github.com/professorice/js-core/issues/554)) ([64ab88d](https://github.com/professorice/js-core/commit/64ab88d278308564b4cd7b6433870c7adb09142a))
* Enhance basic logger destination support. ([#650](https://github.com/professorice/js-core/issues/650)) ([21670c4](https://github.com/professorice/js-core/commit/21670c4acd629f7ccfeb7abbe94fe89723533600))
* Environment ID support for hooks ([#823](https://github.com/professorice/js-core/issues/823)) ([63dc9f9](https://github.com/professorice/js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))
* Implement goals for client-side SDKs. ([#585](https://github.com/professorice/js-core/issues/585)) ([fd38a8f](https://github.com/professorice/js-core/commit/fd38a8fa8560dad0c6721c2eaeed2f3f5c674900))
* Option to use gzip to compress event ([#814](https://github.com/professorice/js-core/issues/814)) ([4e91431](https://github.com/professorice/js-core/commit/4e914317d31378e2a1eaed5aa03e0ac6beac43d5))
* refactors the implementation of context caching.  You can now s& ([#531](https://github.com/professorice/js-core/issues/531)) ([8ab2ee4](https://github.com/professorice/js-core/commit/8ab2ee425a35350a4f1c50e608c39fa3527da513))
* Support inline context for custom and migration events ([6aadf04](https://github.com/professorice/js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))


### Bug Fixes

* Add TimeoutError. ([#428](https://github.com/professorice/js-core/issues/428)) ([aa832db](https://github.com/professorice/js-core/commit/aa832db6172ba727aad9ec478b09a45906e9d5a7))
* Deprecate LDMigrationOpEvent.contextKeys in favor of LDMigrationOpEvent.context ([6aadf04](https://github.com/professorice/js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))
* Handle missing message with valid string. ([#450](https://github.com/professorice/js-core/issues/450)) ([6ff8982](https://github.com/professorice/js-core/commit/6ff8982d5a68f1fff4b8fcafc3eb015a75d3f002))
* Identify incorrectly rejected in client-sdk ([#426](https://github.com/professorice/js-core/issues/426)) ([a019dd6](https://github.com/professorice/js-core/commit/a019dd66b1b852d888e10b78aec9693d7de195fe))
* Multi-kind context containing only 1 kind conveted incorrectly. ([#594](https://github.com/professorice/js-core/issues/594)) ([b6ff2a6](https://github.com/professorice/js-core/commit/b6ff2a67db9f9a24da4a45ad88fa7f2a22fb635d))
* Produce a warning when track is called with a non-numeric metric value. ([#449](https://github.com/professorice/js-core/issues/449)) ([6799742](https://github.com/professorice/js-core/commit/6799742a7914d32b3313e54408f0a2a3dda3ff5c))
* Remove outdated reference to geolocation. ([#719](https://github.com/professorice/js-core/issues/719)) ([0eeb3b6](https://github.com/professorice/js-core/commit/0eeb3b6472419d257bf52c4ab3ae33864eae1902))
* Update sdk-client rollup configuration to match common ([#630](https://github.com/professorice/js-core/issues/630)) ([e061811](https://github.com/professorice/js-core/commit/e06181158d29824ff0131a88988c84cd4a32f6c0))
</details>

<details><summary>js-server-sdk-common: 2.18.0</summary>

## [2.18.0](https://github.com/professorice/js-core/compare/js-server-sdk-common-v2.17.1...js-server-sdk-common-v2.18.0) (2026-02-02)


### Features

* add FDv2 FileDataSource initializer ([#1010](https://github.com/professorice/js-core/issues/1010)) ([99931f0](https://github.com/professorice/js-core/commit/99931f0706c0202390e3b68e3701ba0fb8aba124))
* Add platform support for async hashing. ([#573](https://github.com/professorice/js-core/issues/573)) ([9248035](https://github.com/professorice/js-core/commit/9248035a88fba1c7375c5df22ef6b4a80a867983))
* Add plugin support for node. ([#880](https://github.com/professorice/js-core/issues/880)) ([6b7bf7e](https://github.com/professorice/js-core/commit/6b7bf7eca3b26c3d6e04736fee9ec2f137e743a5))
* Add prerequisite information to server-side allFlagsState. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for client-side prerequisite events. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for conditional event source capabilities. ([#577](https://github.com/professorice/js-core/issues/577)) ([fe82500](https://github.com/professorice/js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for getting the logger from server-side SDKs. ([#684](https://github.com/professorice/js-core/issues/684)) ([1c411a1](https://github.com/professorice/js-core/commit/1c411a15e308520dc7a0f20af76045f84d53e8a4))
* Add support for optional timeout for waitForInitialization. ([#437](https://github.com/professorice/js-core/issues/437)) ([c6032b3](https://github.com/professorice/js-core/commit/c6032b3dd80421ff42aefd729442d18cd27b16e4))
* Add support for Payload Filtering ([#551](https://github.com/professorice/js-core/issues/551)) ([6f44383](https://github.com/professorice/js-core/commit/6f4438323baed802d8f951ac82494e6cfa9932c5))
* Add support for prerequisite details to evaluation detail. ([8c84e01](https://github.com/professorice/js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* adds datasource status to sdk-client ([#590](https://github.com/professorice/js-core/issues/590)) ([6f26204](https://github.com/professorice/js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* Adds StreamingProcessor for FDv2 to sdk-server package. ([#707](https://github.com/professorice/js-core/issues/707)) ([7f5c275](https://github.com/professorice/js-core/commit/7f5c2750dcc8341d049d7e736ca21ec36e168703))
* Allow using custom user-agent name. ([#580](https://github.com/professorice/js-core/issues/580)) ([ed5a206](https://github.com/professorice/js-core/commit/ed5a206c86f496942664dd73f6f8a7c602a1de28))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Correct client evaluation typings. ([#554](https://github.com/professorice/js-core/issues/554)) ([64ab88d](https://github.com/professorice/js-core/commit/64ab88d278308564b4cd7b6433870c7adb09142a))
* Environment ID support for hooks ([#823](https://github.com/professorice/js-core/issues/823)) ([63dc9f9](https://github.com/professorice/js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))
* Export internalServer module for internal LD usage ([#804](https://github.com/professorice/js-core/issues/804)) ([ec43ac8](https://github.com/professorice/js-core/commit/ec43ac8af03c778d8d0ac2bd6213f9d54bf011ac))
* Implement support for hooks. ([#400](https://github.com/professorice/js-core/issues/400)) ([14cb044](https://github.com/professorice/js-core/commit/14cb044f7da5253d268ed37ceeac28f00d4626a5))
* Option to use gzip to compress event ([#814](https://github.com/professorice/js-core/issues/814)) ([4e91431](https://github.com/professorice/js-core/commit/4e914317d31378e2a1eaed5aa03e0ac6beac43d5))
* Support inline context for custom and migration events ([6aadf04](https://github.com/professorice/js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))


### Bug Fixes

* Cleanup timeout timer for waitForInitialization ([#478](https://github.com/professorice/js-core/issues/478)) ([fccbfac](https://github.com/professorice/js-core/commit/fccbfaccb88c7a66f86a2981b74445c894618a06))
* corrected location of payloadFilterKey in LDOptions ([#863](https://github.com/professorice/js-core/issues/863)) ([cc825d4](https://github.com/professorice/js-core/commit/cc825d499b00a46cc887c1804088fbf4cdf082a0))
* Correctly handle null values in JSON variations. ([#569](https://github.com/professorice/js-core/issues/569)) ([907d08b](https://github.com/professorice/js-core/commit/907d08b730ce9745c1b221f2f539f7c56c3a0234)), closes [#568](https://github.com/professorice/js-core/issues/568)
* Deprecate LDMigrationOpEvent.contextKeys in favor of LDMigrationOpEvent.context ([6aadf04](https://github.com/professorice/js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))
* FDv2 initializer readiness ([#1017](https://github.com/professorice/js-core/issues/1017)) ([7a3af02](https://github.com/professorice/js-core/commit/7a3af024ca4db273a90e1b9a1f21ec53ef2fed35))
* Fix cancelling timeout when waitForInitialization throws an exception ([#808](https://github.com/professorice/js-core/issues/808)) ([bb3c950](https://github.com/professorice/js-core/commit/bb3c95041fc41100b11eb698c7662b2442d46fd1))
* Fix issue where flush callback could be called twice. ([#779](https://github.com/professorice/js-core/issues/779)) ([c377e89](https://github.com/professorice/js-core/commit/c377e890f9af71f1658f3303217118206496a602))
* Improve serialization/deserialization overhead with EdgeFeatureStore ([#914](https://github.com/professorice/js-core/issues/914)) ([76d614f](https://github.com/professorice/js-core/commit/76d614f8b036750275cec90ac5b5d68322bf912e))
* Include prerequisiteKey in migration op event. ([#481](https://github.com/professorice/js-core/issues/481)) ([824f59d](https://github.com/professorice/js-core/commit/824f59d256e6316365b32117887a1af2520d8996))
* LRU cache memory leak. ([#475](https://github.com/professorice/js-core/issues/475)) ([a5fdefc](https://github.com/professorice/js-core/commit/a5fdefcf48f359ab26846edb057eb480bfc3db7e)), closes [#474](https://github.com/professorice/js-core/issues/474)
* Produce a warning when track is called with a non-numeric metric value. ([#449](https://github.com/professorice/js-core/issues/449)) ([6799742](https://github.com/professorice/js-core/commit/6799742a7914d32b3313e54408f0a2a3dda3ff5c))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-sdk-common bumped from 2.20.0 to 2.21.0
</details>

<details><summary>js-server-sdk-common-edge: 2.7.0</summary>

## [2.7.0](https://github.com/professorice/js-core/compare/js-server-sdk-common-edge-v2.6.11...js-server-sdk-common-edge-v2.7.0) (2026-02-02)


### Features

* Add support for conditional event source capabilities. ([#577](https://github.com/professorice/js-core/issues/577)) ([fe82500](https://github.com/professorice/js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for optional timeout for waitForInitialization. ([#437](https://github.com/professorice/js-core/issues/437)) ([c6032b3](https://github.com/professorice/js-core/commit/c6032b3dd80421ff42aefd729442d18cd27b16e4))
* Add TTL caching for data store ([#801](https://github.com/professorice/js-core/issues/801)) ([c1de485](https://github.com/professorice/js-core/commit/c1de4850c81dff8ad52276c2bfc2a2aeb87bd2d9))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))


### Bug Fixes

* Improve serialization/deserialization overhead with EdgeFeatureStore ([#914](https://github.com/professorice/js-core/issues/914)) ([76d614f](https://github.com/professorice/js-core/commit/76d614f8b036750275cec90ac5b5d68322bf912e))
* Log errors when there is no error event handler. ([#495](https://github.com/professorice/js-core/issues/495)) ([6b73699](https://github.com/professorice/js-core/commit/6b73699061efa46cd291756d3932fcf78d480f40))
* Remove logging of SDK option configurations ([#806](https://github.com/professorice/js-core/issues/806)) ([a76d196](https://github.com/professorice/js-core/commit/a76d19690a7ef5932c36bfc974affc0a192c2d4f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.17.1 to 2.18.0
</details>

<details><summary>node-server-sdk: 9.11.0</summary>

## [9.11.0](https://github.com/professorice/js-core/compare/node-server-sdk-v9.10.5...node-server-sdk-v9.11.0) (2026-02-02)


### Features

* Add plugin support for node. ([#880](https://github.com/professorice/js-core/issues/880)) ([6b7bf7e](https://github.com/professorice/js-core/commit/6b7bf7eca3b26c3d6e04736fee9ec2f137e743a5))
* Add support for conditional event source capabilities. ([#577](https://github.com/professorice/js-core/issues/577)) ([fe82500](https://github.com/professorice/js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for hooks. ([ce6f041](https://github.com/professorice/js-core/commit/ce6f0414567945bbe39c22df7cf6ae24c2e32931))
* Add support for optional timeout for waitForInitialization. ([#437](https://github.com/professorice/js-core/issues/437)) ([c6032b3](https://github.com/professorice/js-core/commit/c6032b3dd80421ff42aefd729442d18cd27b16e4))
* Add wrapper support. ([#526](https://github.com/professorice/js-core/issues/526)) ([29a43a4](https://github.com/professorice/js-core/commit/29a43a4b5243e16d2f746340d4d50467e0875980))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Environment ID support for hooks ([#823](https://github.com/professorice/js-core/issues/823)) ([63dc9f9](https://github.com/professorice/js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))
* Option to use gzip to compress event ([#814](https://github.com/professorice/js-core/issues/814)) ([4e91431](https://github.com/professorice/js-core/commit/4e914317d31378e2a1eaed5aa03e0ac6beac43d5))


### Bug Fixes

* Configure max backoff and jitter ratio to ensure exponential backoff. ([#463](https://github.com/professorice/js-core/issues/463)) ([050007d](https://github.com/professorice/js-core/commit/050007d8153ecd67633a05761e9ea3b27e15b0ca))
* Fix typo in proxy-authorization header for basic authentication. ([#720](https://github.com/professorice/js-core/issues/720)) ([220b6d6](https://github.com/professorice/js-core/commit/220b6d6d34331d271ca30f0cae363c734fcc38bf)), closes [#718](https://github.com/professorice/js-core/issues/718)
* Log errors when there is no error event handler. ([#495](https://github.com/professorice/js-core/issues/495)) ([6b73699](https://github.com/professorice/js-core/commit/6b73699061efa46cd291756d3932fcf78d480f40))
* Update event source to better log unexpected disconnects. ([#451](https://github.com/professorice/js-core/issues/451)) ([0c83afd](https://github.com/professorice/js-core/commit/0c83afd5f539ecce09f4f5723bc01e5584cc268d))
* Update launchdarkly-eventsource to 2.0.3. ([#468](https://github.com/professorice/js-core/issues/468)) ([c0f934d](https://github.com/professorice/js-core/commit/c0f934db6066f4767e2f52b332adf4a3c2837e40)), closes [#458](https://github.com/professorice/js-core/issues/458)
* Use release-please to update SDK versions ([#1013](https://github.com/professorice/js-core/issues/1013)) ([d1d11f1](https://github.com/professorice/js-core/commit/d1d11f1feb29fc5ccbf14506aa374162d452be42))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.17.1 to 2.18.0
</details>

<details><summary>node-server-sdk-dynamodb: 6.3.0</summary>

## [6.3.0](https://github.com/professorice/js-core/compare/node-server-sdk-dynamodb-v6.2.17...node-server-sdk-dynamodb-v6.3.0) (2026-02-02)


### Features

* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))


### Bug Fixes

* Correct store/telemetry peer deps. ([#439](https://github.com/professorice/js-core/issues/439)) ([b963554](https://github.com/professorice/js-core/commit/b9635541ee0a31094063075faae942698f2e8180))
* Include prerequisiteKey in migration op event. ([#481](https://github.com/professorice/js-core/issues/481)) ([824f59d](https://github.com/professorice/js-core/commit/824f59d256e6316365b32117887a1af2520d8996))
* uncaught DynamoDB exception ([#888](https://github.com/professorice/js-core/issues/888)) ([91ff683](https://github.com/professorice/js-core/commit/91ff683bb196589ac4b13dbd487e4d50b0575440))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.10.5 to 9.11.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.4.3 to >=9.11.0
</details>

<details><summary>node-server-sdk-otel: 1.4.0</summary>

## [1.4.0](https://github.com/professorice/js-core/compare/node-server-sdk-otel-v1.3.5...node-server-sdk-otel-v1.4.0) (2026-02-02)


### Features

* Add OpenTelemetry support for node-server-sdk. ([#401](https://github.com/professorice/js-core/issues/401)) ([daf4939](https://github.com/professorice/js-core/commit/daf4939fdd53c9fe791e828783f809382673d9a5))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Environment ID support for hooks ([#823](https://github.com/professorice/js-core/issues/823)) ([63dc9f9](https://github.com/professorice/js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))
* Update OTEL tracing hook with latest conventions. ([#887](https://github.com/professorice/js-core/issues/887)) ([245f1a3](https://github.com/professorice/js-core/commit/245f1a3a6ca670cf45c7b034c79733c98defdd77))


### Bug Fixes

* Correct store/telemetry peer deps. ([#439](https://github.com/professorice/js-core/issues/439)) ([b963554](https://github.com/professorice/js-core/commit/b9635541ee0a31094063075faae942698f2e8180))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.10.5 to 9.11.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.4.3 to >=9.11.0
</details>

<details><summary>node-server-sdk-redis: 4.3.0</summary>

## [4.3.0](https://github.com/professorice/js-core/compare/node-server-sdk-redis-v4.2.17...node-server-sdk-redis-v4.3.0) (2026-02-02)


### Features

* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))


### Bug Fixes

* Correct store/telemetry peer deps. ([#439](https://github.com/professorice/js-core/issues/439)) ([b963554](https://github.com/professorice/js-core/commit/b9635541ee0a31094063075faae942698f2e8180))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.10.5 to 9.11.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.4.3 to >=9.11.0
</details>

<details><summary>react-native-client-sdk: 10.13.0</summary>

## [10.13.0](https://github.com/professorice/js-core/compare/react-native-client-sdk-v10.12.6...react-native-client-sdk-v10.13.0) (2026-02-02)


### Features

* Add client-side SDK plugin support. ([#834](https://github.com/professorice/js-core/issues/834)) ([a843a33](https://github.com/professorice/js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add configuration validation for ReactNative specific configuration. ([#532](https://github.com/professorice/js-core/issues/532)) ([c1490e2](https://github.com/professorice/js-core/commit/c1490e22d0b3fb4d7df878aabab0ea24db502fb6))
* Add connection mananger. ([#522](https://github.com/professorice/js-core/issues/522)) ([5bf8b16](https://github.com/professorice/js-core/commit/5bf8b16e26e7d8cbbd18524f1c13f773de457b82))
* Add identify timeout to client-sdk. ([#420](https://github.com/professorice/js-core/issues/420)) ([5d73dfe](https://github.com/professorice/js-core/commit/5d73dfeb0d5cdacf620e65e214dd2e334363490e))
* Add support for conditional event source capabilities. ([#577](https://github.com/professorice/js-core/issues/577)) ([fe82500](https://github.com/professorice/js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for hooks. ([#605](https://github.com/professorice/js-core/issues/605)) ([04d347b](https://github.com/professorice/js-core/commit/04d347b25e01015134a2545be22bfd8b1d1e85cc))
* Add support for inspectors. ([#625](https://github.com/professorice/js-core/issues/625)) ([a986478](https://github.com/professorice/js-core/commit/a986478ed8e39d0f529ca6adec0a09b484421390))
* Add support for js-client-sdk style initialization. ([53f5bb8](https://github.com/professorice/js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* add support for steaming in Vega OS ([#974](https://github.com/professorice/js-core/issues/974)) ([7b6ac03](https://github.com/professorice/js-core/commit/7b6ac037b697e6e3a2ccf7c22b519510f02f8364))
* Added react-universal code. ([#493](https://github.com/professorice/js-core/issues/493)) ([e1d2d30](https://github.com/professorice/js-core/commit/e1d2d3061246421e9931d4ec271d477fcbede265))
* adds ping stream support ([#624](https://github.com/professorice/js-core/issues/624)) ([dee53af](https://github.com/professorice/js-core/commit/dee53af9312b74a70b748d49b2d2911d65333cf3))
* Adds support for REPORT. ([#575](https://github.com/professorice/js-core/issues/575)) ([916b724](https://github.com/professorice/js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/professorice/js-core/issues/620)) ([3e6d404](https://github.com/professorice/js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* custom storage option for React Native SDK ([#539](https://github.com/professorice/js-core/issues/539)) ([115bd82](https://github.com/professorice/js-core/commit/115bd828c665731084665b5d94bb3836942332b1))
* Implement polling support. ([#524](https://github.com/professorice/js-core/issues/524)) ([a99048e](https://github.com/professorice/js-core/commit/a99048e0cebaafd536f79114c4727524b8f7357d))
* Refactor application state handling. ([#523](https://github.com/professorice/js-core/issues/523)) ([f5b81e6](https://github.com/professorice/js-core/commit/f5b81e6fc571dc9d97a18d07f382c77cd938fd65))
* Refactor data source connection handling.  ([53f5bb8](https://github.com/professorice/js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* Remove event target shim. ([#545](https://github.com/professorice/js-core/issues/545)) ([448ad67](https://github.com/professorice/js-core/commit/448ad67815b9ec29abd322ed8483b2367147b146)), closes [#412](https://github.com/professorice/js-core/issues/412)
* Update expo and RN version used in example. ([#520](https://github.com/professorice/js-core/issues/520)) ([b8384c4](https://github.com/professorice/js-core/commit/b8384c41243fb7475439cc634459b5156e05791b))
* Update react native async local storage to v2. ([#930](https://github.com/professorice/js-core/issues/930)) ([4888b33](https://github.com/professorice/js-core/commit/4888b33f28cedb22426b13a02697b1c25a2711d1))


### Bug Fixes

* Added iOS SettingsManager null check. ([#471](https://github.com/professorice/js-core/issues/471)) ([8ff641b](https://github.com/professorice/js-core/commit/8ff641be8b32f24884457bd506566e283cf04e40))
* Client SDKs should use wrapper information. ([#836](https://github.com/professorice/js-core/issues/836)) ([1e0cf6a](https://github.com/professorice/js-core/commit/1e0cf6a0f77f8cfe6a7a0e675fc6490ea52a5b07))
* Ensure client logger is always wrapped in a safe logger. ([#599](https://github.com/professorice/js-core/issues/599)) ([980e4da](https://github.com/professorice/js-core/commit/980e4daaf32864e18f14b1e5e28e308dff0ae94f))
* Ensure streaming connection is closed on SDK close. ([#774](https://github.com/professorice/js-core/issues/774)) ([f58e746](https://github.com/professorice/js-core/commit/f58e746a089fb0cd5f6169f6c246e1f6515f5047))
* evaluation detail type should be optional ([#1064](https://github.com/professorice/js-core/issues/1064)) ([e81c333](https://github.com/professorice/js-core/commit/e81c333034f2e8206dfaf70d6fdb6001747b777f))
* Fix base64 encoding of unicode characters. ([#613](https://github.com/professorice/js-core/issues/613)) ([35ec8d1](https://github.com/professorice/js-core/commit/35ec8d1ecc07ddb68f4d02b19e1f238f7ff14df7))
* Fix field visibility. ([#530](https://github.com/professorice/js-core/issues/530)) ([21fb18b](https://github.com/professorice/js-core/commit/21fb18b40139583b44a4185fb689b043547641ab))
* Handle non-status code errors for streaming connection. ([#533](https://github.com/professorice/js-core/issues/533)) ([fc4645e](https://github.com/professorice/js-core/commit/fc4645eb7d70425e7ea615e275e5ad1e488365d4))
* Make it more clear what is happening when an event source is connecting. ([#518](https://github.com/professorice/js-core/issues/518)) ([52055ba](https://github.com/professorice/js-core/commit/52055ba603349c6a2d94e25c58813765d4d9abd9))
* **react-native:** check for nullability in SettingsManager?.settings ([#758](https://github.com/professorice/js-core/issues/758)) ([3449934](https://github.com/professorice/js-core/commit/3449934027697ac9283aeeeca8df9a76d172fcad))
* Requestor initialized with wrong withReasons and useReport config ([#869](https://github.com/professorice/js-core/issues/869)) ([2e095c5](https://github.com/professorice/js-core/commit/2e095c5cc5790dd554d63745a5ebcbfb0f44139a))
* Use release-please to update SDK versions ([#1013](https://github.com/professorice/js-core/issues/1013)) ([d1d11f1](https://github.com/professorice/js-core/commit/d1d11f1feb29fc5ccbf14506aa374162d452be42))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.17.2 to 1.18.0
</details>

<details><summary>server-sdk-ai: 0.17.0</summary>

## [0.17.0](https://github.com/professorice/js-core/compare/server-sdk-ai-v0.16.0...server-sdk-ai-v0.17.0) (2026-02-02)


###   BREAKING CHANGES

* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011))
* Removed deprecated Vercel methods ([#983](https://github.com/professorice/js-core/issues/983))
* Add support for real time judge evals ([#969](https://github.com/professorice/js-core/issues/969))
* AI Config defaults require the "enabled" attribute
* Renamed LDAIAgentConfig to LDAIAgentConfigRequest for clarity
* Renamed LDAIAgent to LDAIAgentConfig *note the previous use of this name
* Renamed LDAIAgentDefault to LDAIAgentConfigDefault for clarity
* Renamed LDAIDefaults to LDAICompletionConfigDefault for clarity
* Change versionKey to variationKey. ([#709](https://github.com/professorice/js-core/issues/709))
* Rename model and providerid to name. ([#706](https://github.com/professorice/js-core/issues/706))
* Updated AI config interface. ([#697](https://github.com/professorice/js-core/issues/697))

### Features

* Add AI SDK for Server-Side JavaScript. ([#619](https://github.com/professorice/js-core/issues/619)) ([18e8c4c](https://github.com/professorice/js-core/commit/18e8c4c9c2189e7629e1e1eb995d85d857c4ae4f))
* Add getSummary method to the tracker. ([#698](https://github.com/professorice/js-core/issues/698)) ([4df902d](https://github.com/professorice/js-core/commit/4df902d98584c88b072d6dab5f32a6ea8c4fcdf5))
* Add support for real time judge evals ([#969](https://github.com/professorice/js-core/issues/969)) ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Add support for TrackedChats in the AI SDK ([#939](https://github.com/professorice/js-core/issues/939)) ([a7ad0ea](https://github.com/professorice/js-core/commit/a7ad0ead1408fdd80b333baa085c462f47ea5ac1))
* Add support for tracking errors. ([#715](https://github.com/professorice/js-core/issues/715)) ([02f1d3d](https://github.com/professorice/js-core/commit/02f1d3daa711319a620a55b50481083980ab18f7))
* Add support for trackStreamMetricsOf method ([#971](https://github.com/professorice/js-core/issues/971)) ([e18979e](https://github.com/professorice/js-core/commit/e18979e27f4542552762a30a390749541daa3749))
* Add support for Vercel AIProvider to the AI SDK ([#946](https://github.com/professorice/js-core/issues/946)) ([8553f24](https://github.com/professorice/js-core/commit/8553f2482a3437975b63992f622b4396cc4ac7e7))
* add support for versioned metrics for AI Configs ([#773](https://github.com/professorice/js-core/issues/773)) ([a3f756f](https://github.com/professorice/js-core/commit/a3f756f3c3207a068115b147d5c7439e204b7ae4))
* Added createJudge method ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Added custom judge support for ai configs ([#1073](https://github.com/professorice/js-core/issues/1073)) ([2066e70](https://github.com/professorice/js-core/commit/2066e707aa906485691594d4c09ff6c3466e5e3e))
* Added judgeConfig method to AI SDK to retrieve an AI Judge Config ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Added trackEvalScores method to config tracker ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Adding agent support for AI Configs ([#893](https://github.com/professorice/js-core/issues/893)) ([bf95b92](https://github.com/professorice/js-core/commit/bf95b92946e93b54e1eda7ffef96039b2b42b9aa))
* Adding Vercel AI SDK mapper ([#895](https://github.com/professorice/js-core/issues/895)) ([0befee0](https://github.com/professorice/js-core/commit/0befee0888d0af03b01c0cf6f46eacc80a3ce8e8))
* Change the typing for the LDAIConfig. ([#688](https://github.com/professorice/js-core/issues/688)) ([1f3f54a](https://github.com/professorice/js-core/commit/1f3f54abef144cccc7ac5b9bfef8392b9d7f2618))
* Chat will evaluate responses with configured judges ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Include AI SDK version in tracking information ([#985](https://github.com/professorice/js-core/issues/985)) ([ef90564](https://github.com/professorice/js-core/commit/ef90564ee1ed9411e77b836d2b5b8037ff671b07))
* Include temperature and maxTokens in LDModelConfig. ([978dfa9](https://github.com/professorice/js-core/commit/978dfa95d1c25f942d96b730b187f92af045f90f))
* Removed deprecated Vercel methods ([#983](https://github.com/professorice/js-core/issues/983)) ([960a499](https://github.com/professorice/js-core/commit/960a49927e795890e5093b0156ec6d721c3066fd))
* track timeToFirstToken in LDAIConfigTracker ([#749](https://github.com/professorice/js-core/issues/749)) ([c97674f](https://github.com/professorice/js-core/commit/c97674fe521bcfe14dc6e0679bf25e293a2a1ad1))
* Update AI tracker to include model & provider name for metrics generation ([#901](https://github.com/professorice/js-core/issues/901)) ([9474862](https://github.com/professorice/js-core/commit/94748621034ed6b1a74060ee0c536bf96a3cd43d))
* Updated AI config interface. ([#697](https://github.com/professorice/js-core/issues/697)) ([cd72ea8](https://github.com/professorice/js-core/commit/cd72ea8193888b0635b5beffa0a877b18294777e))


### Bug Fixes

* Add usage tracking to config method ([#904](https://github.com/professorice/js-core/issues/904)) ([7f0a54c](https://github.com/professorice/js-core/commit/7f0a54c4d880c8bc784fee0d4a2bc9155e96c1b7))
* AI Config defaults require the "enabled" attribute ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* **ai-sdk:** Remove Vercel mapping method from LD ([#911](https://github.com/professorice/js-core/issues/911)) ([f71a457](https://github.com/professorice/js-core/commit/f71a45774eb3fc0fd0ac6a93b1443843d14712d2))
* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011)) ([11de076](https://github.com/professorice/js-core/commit/11de076f270f730b0f05134ce9f57d573f7c0067))
* Correct documentation for AI config function. ([#754](https://github.com/professorice/js-core/issues/754)) ([0bdb0be](https://github.com/professorice/js-core/commit/0bdb0be6b0e0213c5139af9008884ea74be197b1))
* Deprecated toVercelAISDK, trackVercelAISDKStreamTextMetrics, use `@launchdarkly/server-sdk-ai-vercel` package ([e18979e](https://github.com/professorice/js-core/commit/e18979e27f4542552762a30a390749541daa3749))
* Do not include _ldMeta in returned config. ([#668](https://github.com/professorice/js-core/issues/668)) ([89ce6db](https://github.com/professorice/js-core/commit/89ce6dbbb2889af66ca53dd546c5977953dea972))
* **docs:** Node.js AI SDK: modelConfig --&gt; config in readme ([#765](https://github.com/professorice/js-core/issues/765)) ([4d46117](https://github.com/professorice/js-core/commit/4d4611700e7eebd9a7d6f8fd596a7a4ff3310802))
* Fix default configs always being disabled ([#965](https://github.com/professorice/js-core/issues/965)) ([30e2305](https://github.com/professorice/js-core/commit/30e23056e58a2ca5c5b33ad76db12731f19d01c3))
* Improve documentation for AI SDK and AIProvider ([#958](https://github.com/professorice/js-core/issues/958)) ([17d595a](https://github.com/professorice/js-core/commit/17d595aff301998030cfb62724b8eb37fea9adbf))
* Include the AI Judge Config key with tracked metrics ([#986](https://github.com/professorice/js-core/issues/986)) ([213fc79](https://github.com/professorice/js-core/commit/213fc793c752af6517ba7c117219205fb62b9c65))
* Reduce dependencies and use peer dependencies when needed ([#963](https://github.com/professorice/js-core/issues/963)) ([7f3da30](https://github.com/professorice/js-core/commit/7f3da3071ac175451a0c39bfb9717170e516997f))
* Remove deprecated track generation event ([#902](https://github.com/professorice/js-core/issues/902)) ([40f8593](https://github.com/professorice/js-core/commit/40f859386087a443948214e9b535527f125ffa39))
* Remove underscore token usage. Improve documentation. ([#667](https://github.com/professorice/js-core/issues/667)) ([5fe36fb](https://github.com/professorice/js-core/commit/5fe36fbd5b7047428204427fe6849d49de6ee952))
* Rename to AIProviderFactory for more accurate naming ([#949](https://github.com/professorice/js-core/issues/949)) ([92323ec](https://github.com/professorice/js-core/commit/92323ec9d7e3e8c55b2a46ff14aced06f948ec02))
* Renamed LDAIAgent to LDAIAgentConfig *note the previous use of this name ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Renamed LDAIAgentConfig to LDAIAgentConfigRequest for clarity ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Renamed LDAIAgentDefault to LDAIAgentConfigDefault for clarity ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Renamed LDAIDefaults to LDAICompletionConfigDefault for clarity ([6ecd9ab](https://github.com/professorice/js-core/commit/6ecd9ab4d97f6445adfd377709f14d7f3b420363))
* Support Vercel v5 AI SDK token usage ([#926](https://github.com/professorice/js-core/issues/926)) ([0d059a4](https://github.com/professorice/js-core/commit/0d059a43050eaaaba84262d5e16cf875ccb409ea))
* Update default typings to include enabled. ([978dfa9](https://github.com/professorice/js-core/commit/978dfa95d1c25f942d96b730b187f92af045f90f))


### Code Refactoring

* Change versionKey to variationKey. ([#709](https://github.com/professorice/js-core/issues/709)) ([bfee298](https://github.com/professorice/js-core/commit/bfee29843125c55be1b21e4f77c9d8c3c8698856))
* Rename model and providerid to name. ([#706](https://github.com/professorice/js-core/issues/706)) ([8dd3951](https://github.com/professorice/js-core/commit/8dd39517cfc14c6e037a2438d22f20a9527c9ffa))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.17.1 to 2.18.0
  * peerDependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.x to 2.18.0
</details>

<details><summary>server-sdk-ai-langchain: 0.5.0</summary>

## [0.5.0](https://github.com/professorice/js-core/compare/server-sdk-ai-langchain-v0.4.3...server-sdk-ai-langchain-v0.5.0) (2026-02-02)


###   BREAKING CHANGES

* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011))
* Support invoke with structured output in LangChain provider  ([#970](https://github.com/professorice/js-core/issues/970))

### Features

* Add LangChain Provider for AI SDK ([#941](https://github.com/professorice/js-core/issues/941)) ([9cbfb87](https://github.com/professorice/js-core/commit/9cbfb87a73c76cc80b9eac29f7409f156037fce7))
* Renamed createAIMetrics to getAIMetricsFromResponse ([#977](https://github.com/professorice/js-core/issues/977)) ([05b4667](https://github.com/professorice/js-core/commit/05b4667fe6385672f89c84d49302ce40f99e28d5))
* Support invoke with structured output in LangChain provider  ([#970](https://github.com/professorice/js-core/issues/970)) ([0427908](https://github.com/professorice/js-core/commit/0427908cdd410d1f7fefd405bf08945b559070f5))


### Bug Fixes

* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011)) ([11de076](https://github.com/professorice/js-core/commit/11de076f270f730b0f05134ce9f57d573f7c0067))
* Improve documentation for AI SDK and AIProvider ([#958](https://github.com/professorice/js-core/issues/958)) ([17d595a](https://github.com/professorice/js-core/commit/17d595aff301998030cfb62724b8eb37fea9adbf))
* Make unit test less brittle and add CI ([#953](https://github.com/professorice/js-core/issues/953)) ([a2236a9](https://github.com/professorice/js-core/commit/a2236a9d455c60901b870dfe4beb8cffcfab986f))
* Reduce dependencies and use peer dependencies when needed ([#963](https://github.com/professorice/js-core/issues/963)) ([7f3da30](https://github.com/professorice/js-core/commit/7f3da3071ac175451a0c39bfb9717170e516997f))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/server-sdk-ai bumped from ^0.16.0 to ^0.17.0
  * peerDependencies
    * @launchdarkly/server-sdk-ai bumped from ^0.15.0 to ^0.17.0
</details>

<details><summary>server-sdk-ai-openai: 0.1.0</summary>

## [0.1.0](https://github.com/professorice/js-core/compare/server-sdk-ai-openai-v0.4.3...server-sdk-ai-openai-v0.1.0) (2026-02-02)


###   BREAKING CHANGES

* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011))
* Support invoke with structured output in OpenAI provider ([#980](https://github.com/professorice/js-core/issues/980))

### Features

* Add OpenAI Provider for AI SDK ([#947](https://github.com/professorice/js-core/issues/947)) ([5722911](https://github.com/professorice/js-core/commit/572291103ea47943c3d365cb49babaf3c722e26b))
* Renamed createAIMetrics to getAIMetricsFromResponse ([#977](https://github.com/professorice/js-core/issues/977)) ([05b4667](https://github.com/professorice/js-core/commit/05b4667fe6385672f89c84d49302ce40f99e28d5))
* Support invoke with structured output in OpenAI provider ([#980](https://github.com/professorice/js-core/issues/980)) ([515dbdf](https://github.com/professorice/js-core/commit/515dbdf996de92e87d9accec461c0ac9b7e599cd))


### Bug Fixes

* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011)) ([11de076](https://github.com/professorice/js-core/commit/11de076f270f730b0f05134ce9f57d573f7c0067))
* Reduce dependencies and use peer dependencies when needed ([#963](https://github.com/professorice/js-core/issues/963)) ([7f3da30](https://github.com/professorice/js-core/commit/7f3da3071ac175451a0c39bfb9717170e516997f))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.17.1 to 2.18.0
    * @launchdarkly/server-sdk-ai bumped from ^0.16.0 to ^0.17.0
  * peerDependencies
    * @launchdarkly/server-sdk-ai bumped from ^0.15.0 to ^0.17.0
</details>

<details><summary>server-sdk-ai-vercel: 0.1.0</summary>

## [0.1.0](https://github.com/professorice/js-core/compare/server-sdk-ai-vercel-v0.4.3...server-sdk-ai-vercel-v0.1.0) (2026-02-02)


###   BREAKING CHANGES

* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011))
* Support invoke with structured output in VercelAI provider ([#981](https://github.com/professorice/js-core/issues/981))
* VercelProvider now requires type safe parameters for Vercel models

### Features

* Add support for tracking streaming text metics with ([28d3650](https://github.com/professorice/js-core/commit/28d365026fc37d5b5056754d96a9c0615fff0870))
* Add toVercelAISDK method to support easy model creation ([#972](https://github.com/professorice/js-core/issues/972)) ([28d3650](https://github.com/professorice/js-core/commit/28d365026fc37d5b5056754d96a9c0615fff0870))
* Add VercelAI Provider for AI SDK ([#948](https://github.com/professorice/js-core/issues/948)) ([1db731b](https://github.com/professorice/js-core/commit/1db731b98ca2b9d641ffe8cb30c3f50b3979b54c))
* Renamed createAIMetrics to getAIMetricsFromResponse ([#977](https://github.com/professorice/js-core/issues/977)) ([05b4667](https://github.com/professorice/js-core/commit/05b4667fe6385672f89c84d49302ce40f99e28d5))
* Support invoke with structured output in VercelAI provider ([#981](https://github.com/professorice/js-core/issues/981)) ([d0cb41d](https://github.com/professorice/js-core/commit/d0cb41d3a06d6216daac76a516949f0243244417))


### Bug Fixes

* Change to ES Modules to improve support of dynamic loading ([#1011](https://github.com/professorice/js-core/issues/1011)) ([11de076](https://github.com/professorice/js-core/commit/11de076f270f730b0f05134ce9f57d573f7c0067))
* Check finishReason for an error when determining model success ([28d3650](https://github.com/professorice/js-core/commit/28d365026fc37d5b5056754d96a9c0615fff0870))
* Fix metric tracking for v5 responses ([e6c42a8](https://github.com/professorice/js-core/commit/e6c42a866ceb678b5be7da8e097bff71368d2e05))
* Prefer totalUsage over usage when mapping to LDTokenUsage ([28d3650](https://github.com/professorice/js-core/commit/28d365026fc37d5b5056754d96a9c0615fff0870))
* Properly convert LD model parameters to Vercel model parameters ([28d3650](https://github.com/professorice/js-core/commit/28d365026fc37d5b5056754d96a9c0615fff0870))
* Reduce dependencies and use peer dependencies when needed ([#963](https://github.com/professorice/js-core/issues/963)) ([7f3da30](https://github.com/professorice/js-core/commit/7f3da3071ac175451a0c39bfb9717170e516997f))
* Support previous v4 of Vercel AI SDK ([#962](https://github.com/professorice/js-core/issues/962)) ([e6c42a8](https://github.com/professorice/js-core/commit/e6c42a866ceb678b5be7da8e097bff71368d2e05))
* VercelProvider now requires type safe parameters for Vercel models ([28d3650](https://github.com/professorice/js-core/commit/28d365026fc37d5b5056754d96a9c0615fff0870))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/server-sdk-ai bumped from ^0.16.0 to ^0.17.0
  * peerDependencies
    * @launchdarkly/server-sdk-ai bumped from ^0.15.0 to ^0.17.0
</details>

<details><summary>shopify-oxygen-sdk: 0.2.0</summary>

## [0.2.0](https://github.com/professorice/js-core/compare/shopify-oxygen-sdk-v0.1.2...shopify-oxygen-sdk-v0.2.0) (2026-02-02)


### Features

* adding shopify oxygen server sdk ([#991](https://github.com/professorice/js-core/issues/991)) ([e70e484](https://github.com/professorice/js-core/commit/e70e4846d03f7ca2b6ef267efa90a24810e9364a))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.17.1 to 2.18.0
</details>

<details><summary>vercel-server-sdk: 1.3.38</summary>

## [1.3.38](https://github.com/professorice/js-core/compare/vercel-server-sdk-v1.3.37...vercel-server-sdk-v1.3.38) (2026-02-02)


### Bug Fixes

* Improve serialization/deserialization overhead with EdgeFeatureStore ([#914](https://github.com/professorice/js-core/issues/914)) ([76d614f](https://github.com/professorice/js-core/commit/76d614f8b036750275cec90ac5b5d68322bf912e))
* improving payload processing overhead when payload does not change ([#918](https://github.com/professorice/js-core/issues/918)) ([be2ee75](https://github.com/professorice/js-core/commit/be2ee75c1b23d484bddbe1bc4f6662872fb1d3fb))
* Use release-please to update SDK versions ([#1013](https://github.com/professorice/js-core/issues/1013)) ([d1d11f1](https://github.com/professorice/js-core/commit/d1d11f1feb29fc5ccbf14506aa374162d452be42))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common-edge bumped from 2.6.11 to 2.7.0
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).
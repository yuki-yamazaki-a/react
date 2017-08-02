### Directory structure
```
static-src/
├ javascript/
│　├ pc/
│　│　├ entrypoint/
│　│　└ components/
│　│　　　├ partial/
│　│　　　└ [store名]/
│　│　　　　　└ [component名].js
│　├ sp/
│　├ store/
│　│　├ dispatcher/
│　│　│　└ ApplicationDispatcher.js
│　│　└ [store名]/
│　│　　├ Store.js
│　│　　├ ActionCreator.js
│　│　　├ ActionTypes.js
│　│　　└ Dispatcher.js
│　└ modules/
│　　　├ logic/
│　　　├ validation/
│　　　└ utilities/
└ scss/
　├ pc/
　│　├ entrypoint/
　│　├ components/
　│　│　├ partial/
　│　│　└ [store名]/
　│　│　　　└ [component名].scss
　│　├ settings/
　│　├ tooles/
　│　│　├ extends/
　│　│　└ mixin/
　│　└ base/
　└ sp/
```

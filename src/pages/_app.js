import Head from 'next/head'
import { Provider } from 'react-redux'
import '../static/global.less';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../redux/store'

function MyApp({ Component, pageProps }) {
    function returnScript() {
        return `if("addEventListener" in document) { document.addEventListener("DOMContentLoaded", function() { FastClick.attach(document.body); }, false); } if(!window.Promise) { document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js></script>'); }`
    }
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
      persistor.persist()
    })
  
    return (
        <Provider store={store}>
            <PersistGate loading={<div>loading</div>} persistor={persistor}>
                <Head>
                    <title>午安考勤</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                    <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
                    <script>{returnScript()}</script>
                    <link rel="stylesheet" href="/iconfont/iconfont.css"></link>
                    <link href="https://cdn.bootcss.com/antd-mobile/2.1.1/antd-mobile.css" rel="stylesheet" />
                </Head>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}

export default MyApp
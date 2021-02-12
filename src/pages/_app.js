import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import '../static/global.less';

function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
    function returnScript(params) {
        return "if ('addEventListener' in document) { document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false); } if(!window.Promise) { document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>'); }"
    }
    return (
        <Provider store={store}>
            <Head>
                <title>午安考勤</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
                <script>{ returnScript() }</script>
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
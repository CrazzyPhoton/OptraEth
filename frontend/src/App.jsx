import {AppKitProvider} from './components/AppKitProvider.jsx';
import {Navbar} from './components/Navbar.jsx';
import {Content} from './components/Content.jsx';

export default function App() {
  return (
    <AppKitProvider>
      <Navbar/>
      <Content/>
    </AppKitProvider>
  )
}

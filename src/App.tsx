import md5 from 'md5'
import { Navbar } from './components/Header/Navbar';
import { Home } from './Pages/Home/Home';

// interface ResponseData {
//   id: string;
//   title: string;
//   description: string;
//   thumbnail: {
//     path: string;
//     extension: string;
//   }
// }
// const publicKey = '82b123107b3f347612d1c147238d3ef7'
// const privateKey = '437ceec8c6a4281606011b114656643fa8ba8e5f'

// const timeStamp = Number(new Date())

// const hash = md5(timeStamp + privateKey + publicKey)


function App() {

  return (
    <div>
      {/* {comic.map(character => {
        return (
          <h1>{character.title}</h1>
        )
      })} */}
      <Navbar />
      <Home />
    </div>
  )
}

export default App

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';
import {NavBar, CenteredText, TextWithImage} from './components';
import {primaryColorPalette, secondaryColorPalette} from './color-palette';

const myContent = [
  {
    title: "title1",
    subtitle: "subtitle1",
    descriptions: [
      "description1", 
      "description2",
    ],
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/187/462/products/img_20200428_172407_936-1graptopetalum1-c8cd30c025d074977516054950159547-1024-1024.jpg'
  },

  {
    title: "title2",
    subtitle: "subtitle2",
    descriptions: [
      "description3", 
      "description4",
    ],
    img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/187/462/products/img_20200428_172407_936-1graptopetalum1-c8cd30c025d074977516054950159547-1024-1024.jpg'
  }
]

const theme = createTheme({
  palette: {
    
    primary: {
      main:  secondaryColorPalette[500],
    },

    secondary: {
      main:  secondaryColorPalette[500],
   }
  }
});



function App() {

  return (

    <ThemeProvider theme={theme}>
      <NavBar />
      <CenteredText />
        
       {
        myContent.map((item, index) => (
          <TextWithImage TextToTheRight={index % 2 === 0} content={item} />)
        )
      }  
{/*      
      <TextWithImage TextToTheRight={false} />
      <TextWithImage TextToTheRight={true} />
*/}

    </ThemeProvider>
  );
}

export default App;

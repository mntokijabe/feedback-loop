import { Container } from "@mui/material";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import GradeIcon from '@mui/icons-material/Grade';


function Header () {
  let location = useLocation();

    return(
      <>
      {/* {(location.pathname === '/' && location.pathname === '/understand' && location.pathname === '/supported' && location.pathname === '/comments' && location.pathname === '/review') && 
      <Container>
        <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      </Container>
} */}

   {location.pathname == '/success' && <Container>
        <header className='App-header2'>
        <h1 className='App-title2'>Feedback Complete!</h1>
      </header>
      </Container>
    }
   {location.pathname == '/admin' && <Container>
        <header className='App-header2'>
        <h1 className='App-title2'>Feedback Summary</h1>
      </header>
      </Container>
    }
      </>
    )
  
}

export default Header;
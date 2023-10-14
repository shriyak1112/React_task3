import ColorItem from './components/ColorItem';

import './App.css';


const App = () => {

  
  const colors = ['#FF0000','#7fff00','#ffff00','	#0000FF','#FF00FF','	#00FFFF','	#cd853f','	#800080','#ffc0cb','#2e8b57','#fa8072','	#40e0d0','	#8b4513','	#ff8c00','	#008b8b','#ffd700'];

  const setTheme = (color) => {
    document.documentElement.style.setProperty('--bg-color',color);
  }


  const setColor = (event) => {

    const currentColor = event.target.style.getPropertyValue('--bg-color');

    setTheme(currentColor);

    console.log(currentColor);

  }

  return (
    <div className='App'>
       
      <div className='background'>
        <h1 className='heading'>Color Picker</h1>
      
      
      <div className='color-switcher'>
       
        <div className='color-list'>
          {colors.map( (color,idx) => <ColorItem setColor={setColor} color={color}/> )}
        </div>
        <div>
          <button className='btn'>Pick a color</button>
        </div>
      </div>
     
    </div>
    </div>
  );
}

export default App;

import Blades from './data/blades';

// create state for app by using static data
function createNew(){
  Object.keys(Blades).forEach( (blade) => {
     Blades[blade].obtained = false;
     Blades[blade].status = "need"
  });
}

createNew();

const blades = {...Blades};

export default blades;

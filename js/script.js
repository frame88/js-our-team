const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];



/*
In allegato trovate un layout di base e un file js in cui è definito un array di oggetti che rappresentano i membro del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.
*/
//creare una sola carta e usarla come modello per le successive
//i dati da usare non vengono dati in input, poichè sono gia qui sopra
//
/*
const inputClass = document.getElementById('class');
const inputTeacher = document.getElementById('teacher');
const button = document.getElementById('addClass');

button.addEventListener('click', function() {
  const nameClass = inputClass.value;
  const nameTeacher = inputTeacher.value;
  const obj = {
    name : nameClass,
    teacher : nameTeacher,
  };
  console.log(obj);
  classiArrobj
  
})
*/

/*
        < div class="team-container" >
          < !--Inseriamo inizialmente una card statica per stilarla e vedere l'effetto finale -->
          < div class="team-card" >
            <div class="card-image">
              <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>Wayne Barnett</h3>
              <p>Founder & CEO</p>
            </div>
          </div >
        </div >

*/

const container = document.querySelector('.team-container');
  for (let i = 1; i < team.length; i++) {
    const member = team[i];
    const templateus = `
    <div class="team-card">
      <div class="card-image">
        <img src="img/${member.image}" alt="${member.name}">
      </div>
      <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    </div>`;
    container.innerHTML += templateus;
  }

























//question 20
const sandwich={
  bread:'wheet',
  meat:'chicken',
  cheese:'cheeser',
  toppings:['tomato','onion','chilli']
};
let{bread,meat}=sandwich
   bread:'brown';
   meat:'goat';
   console.log(sandwich.bread);
   console.log(sandwich.meat);
   console.log(bread);
  
   //question 10
   const article = {
        title: "Introduction to React Hooks",
        body: "React Hooks provide a way to use state and other React features without writing a class component.",
      };
      
      const displayDate = new Date().getFullYear();
      
      document.body.innerHTML = `
      <section>
        <header>
            <h1>The React Blog</h1>
        </header>
        <article>
            <h2>${article.title}</h2>
            ${article.body}
        </article>
        <footer>
            <p>copyright ${displayDate} | The React Blog</p>
        </footer>
      </section>
      `;
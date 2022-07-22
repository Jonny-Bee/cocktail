import './footer.styles.css'
const MainFooter = () =>{
    return(
        <footer className="bottom-container mt-auto">
        <a className="footer-link" href="https://www.linkedin.com/in/jonathan-bartram-b98b382b/">LinkedIn</a>
        <a className="footer-link" href="https://www.facebook.com/jon.bartram/">Facebook</a>
        <a className="footer-link" href="https://www.thecocktaildb.com/api.php?ref=apilist.fun">The Cocktail db</a>

        
        <p>© Jonathan Bartram.</p>
        <p>Data provided by the cocktail db.</p>
      </footer>
    )
}
export default MainFooter;
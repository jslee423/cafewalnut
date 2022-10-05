import Header from "../sections/Header";
import './Parallax.css';

const Parallax = (props) => {
    return (
        <div id="parallax-container">
            <section id="about">
                <a class="text-decoration-none">
                    <div class="parallax parallax-one">
                        <Header />
                    </div>
                </a>
            </section>
            
            <section className='mainSection'>
                {/* <div class="block">
                    <p><span class="first-character fc-yellow">W</span>elcome to Café Walnut. We are a family owned cafe in the heart of center city just a few blocks away from Independence Hall. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam ac leo auctor ultricies et in sapien. Suspendisse potenti. Integer id massa nec ligula interdum lacinia a nec tellus. Morbi eros odio, scelerisque semper consequat vel, sagittis vitae ante. Integer bibendum risus erat, nec dignissim tellus varius vel.</p>
                    <p class="line-break"></p>
                </div> */}
                {props.children}
            </section>
        </div>
    );
};

export default Parallax;
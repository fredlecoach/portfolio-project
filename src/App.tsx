import { Github, Mail, Linkedin, Award, Code2, Briefcase, User, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              FredRc
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors">À propos</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Compétences</a>
              <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="#education" className="hover:text-purple-400 transition-colors">Formation</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frédéric Roblot-Coulanges
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-400 mb-6">Développeur Web Full Stack</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Personal Trainer reconverti en développeur web passionné. Mon parcours unique combine créativité technique et accompagnement humain.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/fredlecoach" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/fred-webdev/" target='_blank' className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:f.roblot.coulanges@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/profil.jpg" 
                alt="Frédéric Roblot-Coulanges" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Expertise Technique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              title="Front-End" 
              skills={['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']}
              icon={<Code2 className="w-8 h-8 text-purple-400" />}
            />
            <SkillCard 
              title="Frameworks" 
              skills={['React.js', 'Vue.js', 'Symfony']}
              icon={<Globe className="w-8 h-8 text-purple-400" />}
            />
            <SkillCard 
              title="Back-End" 
              skills={['PHP', 'MySQL', 'SQL', 'phpMyAdmin']}
              icon={<Briefcase className="w-8 h-8 text-purple-400" />}
            />
            <SkillCard 
              title="Design" 
              skills={['Figma', 'Adobe Illustrator', 'Canva']}
              icon={<User className="w-8 h-8 text-purple-400" />}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <ProjectCard 
              title="Personal Training"
              image="/images/fredlecoach.png"
              tech="JS | React.js | Node.js | Express | Firebase"
              link="https://fredlecoach.netlify.app/"
            />
            <ProjectCard 
              title="Tempo : The To Do List"
              image="/images/logoTempo.png"
              tech="JS | Vue.js | API Rest | Bootstrap"
              link="https://tempo-the-todolist.netlify.app/"
            />
            <ProjectCard 
              title="Les jolies sorcières"
              image="/images/logo3.jpg"
              tech="JS | React.js | JQuery | Bootstrap"
              link="https://jolies-sorcieres.netlify.app/"
            />
            <ProjectCard 
              title="Smart Travel"
              image="/images/1.png"
              tech="JS | React.js | HTML | CSS | Bootstrap"
              link="https://fred-webdev-smart-travel.netlify.app/"
            />
            {/* <ProjectCard 
              title="Chambres d'hôtes"
              image="/images/logo-2.png"
              tech="PHP | Symfony | JS | Bootstrap"
              link="https://le-clos-des-chenes.fred-webdev.fr/"
            />
            <ProjectCard 
              title="Placements financiers"
              image="/images/logo_credit-finance.png"
              tech="PHP | Symfony | JS | HTML | CSS"
              link="https://fred-webdev.fr/"
            /> */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Formation</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <EducationCard 
              title="Titre professionnel développeur web / web mobile"
              year="2024"
              institution="Greta, La Garenne-Colombes"
            />
            <EducationCard 
              title="LICENSIERAD PERSONLIG TRÄNARE"
              year="2021"
              institution="Suède"
              description="Brevet d'Etat suédois personal trainer délivré par le gouvernement suédois"
            />
            <EducationCard 
              title="Maîtrise / Master STAPS"
              year="2008"
              institution="UFR STAPS Paris Sud 11, Orsay"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">FredRc &copy; {new Date().getFullYear()} - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills, icon }) {
  return (
    <div className="p-6 bg-gray-900 rounded-xl hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, image, tech, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" 
       className="block group">
      <div className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
        <div className="h-100 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{tech}</p>
        </div>
      </div>
    </a>
  );
}

function EducationCard({ title, year, institution, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <Award className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-purple-400">{year}</p>
          <p className="text-gray-300">{institution}</p>
          {description && <p className="text-gray-400 mt-2">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
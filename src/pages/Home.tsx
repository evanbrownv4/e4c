import "../styling/Layout.css"
import "../styling/Components.css"
import { curSponsors } from "../consts/Sponsors"
import committee_photo from "../assets/temp_committee_photo.jpg"
import peru_photo from "../assets/peru_project.jpg"
import pp_photo from "../assets/IMG_9108.jpg"
import awards_photo from "../assets/changemakers_award.png"

export default function Home() {
    return (
        <div className="">
            {/* Hero Section */}
            <section className="min-h-screen bg-[url(../assets/leafy_checkerbox.png)] bg-cover bg-center flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-bold text-neutral-900 mb-4">Engineering For Change</h1>
                <p className="text-2xl text-neutral-800">Innovating for a sustainable future.</p>
            </section>

            {/* Committee Preview */}
            <section className="min-h-screen bg-lime-200 bg-cover bg-center flex flex-col justify-center items-center text-center px-4">
                {/* Centered Title */}
                <h1 className="text-5xl font-bold text-neutral-900 mb-12">
                   The Committee
                </h1>
                  
                {/* Two-column split: 2/3 photo, 1/3 text */}
                <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center">
                  
                  {/* Left: photo, 2/3 width on medium+ screens */}
                  <div className="md:w-2/3 w-full flex justify-center">
                      <img 
                          src={committee_photo}
                          alt="Group photo during precious plastics meeting" 
                          className="rounded-lg shadow-lg object-cover w-full h-auto max-h-100"
                      />
                  </div>
                  
                  {/* Right: text + button, 1/3 width on medium+ screens */}
                  <div className="md:w-1/3 w-full flex flex-col items-start text-left space-y-4">
                    <p className="text-lg text-neutral-800">
                        The Engineering for Change committee is a dedicated team that keeps the society running and supports our projects in making a real-world impact. Led by the Executive Committee—President, Secretary, and Treasurer—the committee provides strategic direction and ensures the smooth operation of E4C. Alongside them, our non-executive committee members oversee key areas such as funding, training, social media, and social events, helping to equip members with skills, secure resources, and build a strong, connected community. Together, the committee works behind the scenes to empower students to turn innovative ideas into meaningful change.
                        {/* Helping us support our society is our team of committee members. From managing finances to finding sponsors to organizing events, our committee are key in running the society. Click below to find out more! */}
                    </p>
                    <a href="/committee" className="inline-block px-6 py-3 bg-[#AAD550] text-white font-bold rounded-full hover:bg-green-600 transition">
                      Meet our Committee
                    </a>
                  </div>
                  
                </div>
            </section>

            {/* Project Preview */}
            <section className="min-h-screen bg-[url(../assets/crumpled_paper.jpg)] bg-cover bg-center flex flex-col justify-center items-center text-center px-4">
                {/* Centered Title */}
                <h1 className="text-5xl font-bold text-neutral-900 mb-12">
                   Our Projects
                </h1>
                  
                {/* 2-column split: 1/3 photo, 2/3 text */}
                <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center">
                  
                    {/* Left: text, 2/3 width on medium+ screens */}
                    <div className="md:w-2/3 w-full flex flex-col items-center text-left space-y-4">
                        <p className="text-2xl text-neutral-800">
                            {/* Helping us support our society is our team of committee members. From managing finances to finding sponsors to organizing events, our committee are key in running the society. Click below to find out more! */}
                            Engineering for Change (E4C) brings together passionate students to design and deliver engineering solutions that make a real, positive impact on people and the planet. Our diverse projects span sustainable construction, renewable energy, recycling, and community development—ranging from mycelium-based building materials and plastic recycling on campus to innovative wind and tidal energy systems and international humanitarian projects. Whether developing clean energy technologies, transforming waste into valuable resources, or working directly with communities across the globe, E4C projects are united by a shared mission: using engineering creativity and practical action to build a more sustainable, equitable future.
                        </p>
                        <a href="/projects" className="inline-block px-6 py-3 bg-[#AAD550] text-white text-xl font-bold rounded-full hover:bg-green-600 transition">
                            See our Projects
                        </a>
                    </div>

                    {/* Right: photos, 1/3 width on medium+ screens */}
                    <div className="md:w-1/3 w-full flex flex-col items-start text-left space-y-4">
                      <img
                          src={peru_photo}
                          alt="Photo from Project Peru"
                          className="rounded-lg shadow-lg object-cover w-full h-auto max-h-100"
                      />
                      <img
                          src={pp_photo}
                          alt="Photo during precious plastics lab."
                          className="rounded-lg shadow-lg object-cover w-full h-auto max-h-100"
                      />
                  </div>
                  
                </div>
            </section>

            {/* Sponsors and Awards Preview */}
            <section className="min-h-[110vh] bg-lime-200 bg-cover bg-center flex flex-col justify-center items-center text-center px-4">                  
                {/* Two-column split: 1/2 awards/etc, 1/2 sponsors */}
                <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center">
                  
                {/* Left: 2/3 for outreach and awards*/}
                <div className="md:w-1/2 w-full flex flex-col items-center text-left space-y-4">
                    <h2 className="text-5xl font-bold text-neutral-900 text-center mb-4">Awards and Achievements</h2>
                    <p className="text-xl text-left">
                        E4C and it's projects have won a number of awards and have a collection of notable achievements, such as:
                        <br/>  - Precious Plastics project leads won the 2025 Changemakers award.
                        <br/>  - Gold sustainability certification for the chemical engineering labs. 
                        <br/>  - Numerous international competition results.
                        <br/>  - Visited 10 schools across Edinburgh.
                        <br/>  - Largest student led sustainability society within the University of Edinburgh. 
                    </p>
                    <img
                        src={awards_photo}
                        alt="E4C receiving an award or two idk"
                        className="rounded-lg shadow-lg object-cover w-full max-h-75"
                    />
                </div>
                  
                  {/* Right: photos, 1/2 width on medium+ screens */}
                  <div className="md:w-1/2 w-full flex flex-col items-start text-left space-y-4">
                    <h2 className="text-5xl font-bold text-neutral-900 text-center mb-8">
                        Sponsors
                    </h2>
                    <p className="text-xl">
                        Sponsorships play a vital role in enabling Engineering for Change to turn ideas into impactful, real-world projects. With the support of our sponsors, we are able to fund materials, training, competitions, and international outreach that would otherwise be out of reach for students. These partnerships not only empower our members to develop practical engineering skills, but also help drive sustainable solutions that benefit communities and the environment.
                    </p>
                    <h3 className="text-3xl font-bold text-neutral-900 text-center mb-8">Current Sponsors</h3>
                    <div className="grid grid-auto-small">
                        {curSponsors.map((sponsor) => (
                            <img src={sponsor.logo} alt={sponsor.name} className=""/>
                        ))}
                    </div>
                    {/* <h3 className="text-3xl">Previous</h3>
                    <div className="grid grid-auto-small">
                        {prevSponsors.map((sponsor) => (
                            <img src={sponsor.logo} alt={sponsor.name} className=""/>
                        ))}
                    </div> */}
                </div>
            </div>
        <a href="/contactus" className="inline-block px-6 py-3 bg-[#AAD550] text-white text-xl font-bold rounded-full hover:bg-green-600 transition mt-10">
            Get in Touch
        </a>
        </section> 
    </div>
    )
}

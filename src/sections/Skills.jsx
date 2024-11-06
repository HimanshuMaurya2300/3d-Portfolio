import BallCanvas from "../components/Ball"
import { technologies } from "../constants"

const Skills = () => {

    return (
        <div className="c-space my-20 text-white pb-10" id="skills">

            <h3 className="head-text mb-10">
                Skills
            </h3>

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                        <p className="text-center mt-2">{technology.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
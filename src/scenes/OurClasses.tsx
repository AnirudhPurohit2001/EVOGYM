import { motion } from "framer-motion"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import HText from "../shared/HText"
import { ClassType } from "../shared/types"
import Class from "./Class"


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Build strength and muscle with expert-led weightlifting sessions.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: " Improve flexibility, balance, and mindfulness through guided yoga practices.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Strengthen your core with targeted workouts for a sculpted midsection.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: " Experience dynamic, high-energy workouts inspired by outdoor adventures.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Engage in full-body workouts designed to boost endurance and overall fitness.",
        image: image5,
    }, {
        name: "Training Classes",
        description: "Tailored programs to enhance strength, agility, and athletic performance.",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: string) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage("ourclasses")}>
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">Discover a wide range of fitness classes designed to suit every goal and skill level. From high-energy cardio and strength training to relaxing yoga and mobility sessions, our expert-led classes keep you motivated and challenged.</p>
                    </div>

                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap ">
                        {classes.map((item, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image} />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses

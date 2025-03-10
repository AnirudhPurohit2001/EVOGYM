import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "../shared/HText";
import { BenefitType } from "../shared/types";
import Benefit from "./Benefit";
import BenefitPageGraphic from "../assets/BenefitsPageGraphic.png"
import ActionButton from "../shared/ActionButton";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: "State of Art Facilities",
        description: "Experience top-tier fitness with our state-of-the-art facilities, featuring cutting-edge equipment, spacious workout areas, and premium amenities designed to elevate your training",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: "100's of Diverse Classes",
        description: "Join 100s of diverse classes tailored for all fitness levels, from high-intensity workouts to calming yoga sessions—there's something for everyone!",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: "Expert and Pro Trainers",
        description: "Train with expert and pro trainers who bring experience, passion, and personalized guidance to help you achieve your fitness goals.",
    },
]

type Props = {
    setSelectedPage: (value: string) => void;
}
const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage('benefits')}>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="items-center justify-between gap-8 mt-5 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage} />
                    ))}

                </motion.div>

                {/* Graphics & Description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img
                        className="mx-auto"
                        alt="benefit-page-graphic"
                        src={BenefitPageGraphic} />

                    {/* Descriptiion */}
                    <div>
                        {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.7 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT.</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}>
                            <p className="my-5 ">Join a thriving community of millions who are transforming their lives through fitness. Whether you're just starting your journey or pushing your limits, our supportive environment and expert resources help you stay motivated and achieve your goals.</p>
                            <p className="mb-5">With world-class facilities, diverse classes, and top-tier trainers, our members enjoy an unparalleled fitness experience. No matter your fitness level, you’ll find the guidance, motivation, and community you need to succeed.</p>
                        </motion.div>

                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    )
}

export default Benefits

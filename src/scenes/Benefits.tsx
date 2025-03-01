import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import HText from "../shared/HText";


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
                <div className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </div>

                {/* BENEFITS */}
                <div className="items-center justify-between gap-8 mt-5 md:flex">
                    {benefits.map((benefit) => (
                        <Benefit />
                    ))}

                </div>

            </motion.div>

        </section>
    )
}

export default Benefits

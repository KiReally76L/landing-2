import "./Register.scss"
import container from "/src/images/Container.png"
import { useState } from "react"
import { Form } from "./Form/Form"
import { motion } from "framer-motion"

export const Register = () => {
	const blockRegisterAnimate = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 0.2, ease: "easeOut" },
		},
	}
	const [values, setValues] = useState({ name: "", tel: "", link: "" })

	return (
		<motion.div
			id='register'
			variants={blockRegisterAnimate}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.1 }}
			className='register'>
			<div className='register__left'>
				<h2>Нет времени разбираться? Подскажем!</h2>
				<p>
					Оставьте ваши контактные данные и мы свяжемся с вами и расскажем
					об особенностях доставки
				</p>
			</div>
			<div className='register__right'>
				<Form values={values} setValues={setValues} />
				<div className='register__right__images'>
					<img src={container} alt='container' />
				</div>
			</div>
		</motion.div>
	)
}

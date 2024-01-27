import { MyInput } from "/src/UI/MyInput/MyInput"
import { MyButton } from "/src/UI/MyButton/MyButton"
import { ToastContainer } from "react-toastify"
import { successfully, refusal } from "/src/data/CardImages"

export const Form = ({ values, setValues }) => {
	const handleActiveSubmitted = e => {
		e.preventDefault()
		if (values.name === "" || values.tel === "" || values.link === "") {
			return refusal()
		} else {
			return successfully()
		}
	}
	return (
		<form>
			<MyInput
				value={values.name}
				onChange={e => setValues({ ...values, name: e.target.value })}
				type='text'
				variant='small'
				placeholder='Введите ваше имя'
			/>
			<MyInput
				value={values.tel}
				onChange={e => setValues({ ...values, tel: e.target.value })}
				type='tel'
				variant='small'
				placeholder='Введите ваш телефон'
			/>
			<MyInput
				value={values.link}
				onChange={e => setValues({ ...values, link: e.target.value })}
				type='text'
				variant='small'
				placeholder='Ссылка на соц.сети (VK/INST/TG)'
			/>
			<MyButton
				onClick={handleActiveSubmitted}
				type='submit'
				variant='btnBorder'>
				Отправить заявку
			</MyButton>
			<ToastContainer />
		</form>
	)
}

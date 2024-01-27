import "../Form.scss"
import { MyInput } from "/src/UI/MyInput/MyInput"

export const BottomBlock = ({ value, setValue }) => {
	return (
		<div className='form__block__bottom'>
			<MyInput
				value={value.link}
				onChange={e => setValue({ ...value, link: e.target.value })}
				type='text'
				variant='big'
				placeholder='Ссылка на товар'
			/>
			<MyInput
				value={value.social}
				onChange={e => setValue({ ...value, social: e.target.value })}
				type='text'
				variant='big'
				placeholder='Ссылка на соц.сети (VK/INST/TG)'
			/>
		</div>
	)
}

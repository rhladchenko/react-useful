import { useDispatch } from 'react-redux';

import { addGoods } from '../action';
import GoodsList from './GoodsList';

const Goods = () => {
	const dispatch = useDispatch();

	const formHandler = (event) => {
		event.preventDefault();
		let data = event.target.elements;
		console.log(data.id.value);
		dispatch(addGoods(data.id.value, data.title.value, data.image.value,));
	};

	return (
		<div className='goods'>
			<form onSubmit={formHandler}>
				<div>
					<input type="text" name='id' defaultValue='123' />
				</div>
				<div>
					<input type="text" name='title' defaultValue='Title' />
				</div>
				<div>
					<input type="text" name='image' defaultValue='URL image' />
				</div>
				<div>
					<button type='submit'>Add new goods</button>
				</div>
			</form>
			<br />
			<br />
			<GoodsList />
		</div>
	)
}

export default Goods;
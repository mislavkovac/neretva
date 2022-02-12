/* eslint-disable @next/next/no-img-element */
import Categories from '../../components/Categories';
import CategoriesMobile from '../../components/CategoriesMobile';

export default function categories() {
	return (
		<div className="">
			<div className="hidden sm:block">
				<Categories />
			</div>
			<div className="block sm:hidden">
				<CategoriesMobile />
			</div>
		</div>
	);
}

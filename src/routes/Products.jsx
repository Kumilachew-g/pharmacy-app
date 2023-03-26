import '../index.css';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';

const Product = () => {
  // const [search_product, setSearchProduct] = useState("");
  console.log('Product Reached');
  return (
    <div>
      <Header />
      {/* sidebar */}
      <div className='flex w-full overflow-x-hidden'>
        <Sidebar place='2' />
        {/* main content container */}
      </div>
    </div>
  );
};

export default Product;

import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import ProductCard from '../../components/product/productCard';
import {screenStyle} from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';
import CategorySelect from '../../components/widgets/categorySelect';

const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  // sayfa yüklenirkenki durumu için state tut.
  const [isLoading, setIsLoading] = useState(false);

  // * Bu sayfaya yollanan category verilerini, route içinden alıp değişkene attık
  // See All butonları basılan kategoriye göre çalışmış olacak.
  const productCategory = route?.params?.category

  const getAllProducts = (category) => {
    const url = category ? PRODUCTS_URL + `/category/${category}` : PRODUCTS_URL

    // istek atmaya girdiği anda yüklenmeyi true'ya çek
    setIsLoading(true);

    getRequest(url)
      .then(response => setProducts(response.data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
    // üstündeki tüm işlemler bittikten sonra gerçekleşen blok
  };

  useEffect(() => {
    getAllProducts(productCategory);
  }, []);

  return (
    <View style={screenStyle.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />
      {/* isLoading true ise yükleniyor gösterecek, veriler geldikten sonra kalkacak */}
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          // kaç sütun olsun onu belirledik
          numColumns={2}
          contentContainerStyle={{paddingBottom: 25, marginTop: 5}}
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;

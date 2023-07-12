import { View, Swiper as TSwiper, SwiperItem as TSwiperItem } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })
  const demo = {
    display: 'flex'
  }

  const div = {
    flex: 1,
    border: '1px solid red'
  }
  return (
    <TSwiper circular>
          <TSwiperItem>
            <View style={demo}>
              <View style={div}>1</View>
              <View style={div}>2</View>
              <View style={div}>3</View>
              <View style={div}>4</View>
            </View>
          </TSwiperItem>
          <TSwiperItem>
            <View style={demo}>
              <View style={div}>5</View>
              <View style={div}>6</View>
              <View style={div}>7</View>
              <View style={div}>8</View>
            </View>
          </TSwiperItem>
          <TSwiperItem>
            <View style={demo}>
              <View style={div}>9</View>
              <View style={div}>10</View>
              <View style={div}>11</View>
              <View style={div}>12</View>
            </View>
          </TSwiperItem>
        </TSwiper>
  )
}

import { IAGoodsListConfig } from './goods-type'

export const goodsConfig: IAGoodsListConfig = {
  // 图片，可配置
  goodsList: [
    {
      imgUrl: '',
      id: 11,
      name: '11',
    },
  ],
  cardProps: {
    listStyle: 1,
    goodsStyle: 1,
    colorStyle: 'default',
  },
  cardContentProps: [
    {
      label: '商品名称',
      key: 'g-name',
      isCheck: true,
    },
    {
      label: '商品角标',
      key: 'g-dot',
      isCheck: true,
      options: {
        styleOpt: 1,
        posOpt: 'left',
      },
    },
  ],
}

// 列表样式
type ListStyleKey = 1 | 2 | 3 | 4 | 5

// 位置
type PositionKey = 'left' | 'center' | 'right'

export interface IAGoodsListComponent {
  imgUrl: string
  id: string | number
  name?: string
}

export interface IAGoodsCardContent {
  label: string
  key: string
  isCheck: boolean
  options?: {
    styleOpt: ListStyleKey
    posOpt?: PositionKey
  }
}

export interface IAGoodsListConfig {
  goodsList: IAGoodsListComponent[]
  cardProps: {
    listStyle: ListStyleKey
    goodsStyle: ListStyleKey
    colorStyle: 'default' | string
  }
  cardContentProps: IAGoodsCardContent[]
}

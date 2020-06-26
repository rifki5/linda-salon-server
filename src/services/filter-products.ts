import * as areRangesOverlapping from 'date-fns/are_ranges_overlapping'
import * as isEqual from 'date-fns/is_equal'

const filterBookingsByDateGiven = (bookings: any[], startDate: Date, endDate: Date): any[] | null => {
  const filter = bookings.reduce((acc: any[], curr) => {
    const filterOverlap = areRangesOverlapping(
      curr.startDate,
      curr.endDate,
      startDate,
      endDate
    )
    const filterSameStartDay = isEqual(
      curr.startDate,
      startDate
    )
    const filterSameEndDay = isEqual(
      curr.endDate,
      endDate,
    )
    const filterDiffStartButSameEnd = isEqual(
      curr.startDate,
      endDate
    )
    const filterDiffEndButSameStart = isEqual(
      curr.endDate,
      startDate,
    )

    if (
      (
        filterOverlap ||
        filterSameStartDay ||
        filterSameEndDay ||
        filterDiffStartButSameEnd ||
        filterDiffEndButSameStart
      )
      && curr.status === "SEND"
    ) acc.push(curr.items)
    
    return acc
  }, [])
  return filter.length !== 0 ? filter : undefined
}

const getIdsProductInNode = (array: any[]) => array.map(val => val.node.id)
const getIds = (array: any[]) => array.map(val => val.id)
const getIdsProduct = (array: any[]) => array.map(val => val.product.id)

const reduceRightProduct = (idsProd: any[], idsItemsR: any[], arrayR: any) => idsProd.reduce((acc, curr) => {
  if(idsItemsR.indexOf(curr) >= 0) {
    acc.push(arrayR[idsItemsR.lastIndexOf(curr)])
  }
  return acc
}, [])

const reduceProduct = (idsItemHasProduct: any[], idsProducts: any[], itemHasProducts: any[]) => idsItemHasProduct.reduce(function(acc, curr, i) {
  if (idsProducts.indexOf(curr) >= 0 && getIds(acc).indexOf(curr) >= 0) {
    acc.push({
      ...itemHasProducts[i].product,
      stock: acc[getIds(acc).lastIndexOf(curr)].stock - itemHasProducts[i].amount
    })
  }
  if (idsProducts.indexOf(curr) >= 0 && getIds(acc).indexOf(curr) < 0) {
    acc.push({
      ...itemHasProducts[i].product,
      stock: itemHasProducts[i].product.stock - itemHasProducts[i].amount
    })
  }
  return acc
}, []);

const join = (arrProd: any[], idsArrR: any[], arrR: any[]) => arrProd.map((prod, i) => {
  if(idsArrR.indexOf(prod.node.id) >= 0) return {
    "node": {
      ...prod.node,
      stock: arrR[idsArrR.indexOf(prod.node.id)].stock
    }
  }
  return prod
})

const filterProducts = (arrItems: any[], arrProd: any[]) => {
  // conver all to array ids
  const idsItemR = getIdsProduct(arrItems)
  const idsProd = getIdsProductInNode(arrProd)
  
  // reduce product
  const filter1 = reduceProduct(idsItemR, idsProd, arrItems)

  const idsFilter1 = getIds(filter1)
  // reduce righr product
  const filter2 = filter1.length === 1 ? filter1 : reduceRightProduct(idsProd, idsFilter1, filter1)
  
  // conver result filter1 to array ids
  const IdsRFilter = getIds(filter2)

  // finally join to product
  return join(arrProd, IdsRFilter, filter2)
}

const isProductHasMinusStock = (arrItems: any[], arrProd: any[]): boolean => {
   // convert all to array ids
  const idsItemR = getIdsProduct(arrItems) as any[]
  const idsProd = getIds(arrProd) as any[]

  // reduce product
  const filter1 = reduceProduct(idsItemR, idsProd, arrItems) as any[]

  // filter only min product
  const cekMin = filter1.filter((curr, i) => curr.stock < 0) as any[]

  return cekMin.length > 0
}

const ProductHasMinusStock = (arrItems: any[], arrProd: any[]): any[] => {
  // convert all to array ids
  const idsItemR = getIdsProduct(arrItems) as any[]
  const idsProd = getIds(arrProd) as any[]

  // reduce product
  const filter1 = reduceProduct(idsItemR, idsProd, arrItems) as any[]

  // filter only min product
  const cekMin = filter1.filter((curr) => curr.stock < 0) as any[]

  const idsCek = getIds(cekMin)

  const reduceR = reduceRightProduct(idsProd, idsCek, cekMin)

  return reduceR
}

export {
  filterBookingsByDateGiven,
  filterProducts,
  ProductHasMinusStock,
  isProductHasMinusStock,
}

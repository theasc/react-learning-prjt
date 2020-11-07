import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    (shop) => shop.collections,
);

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectShopCollection],
    collections => collections ?  collections[collectionUrlParam] : null,
));

export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collection => collection ? Object.keys(collection).map( key => collection[key]) : [],
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching,
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)

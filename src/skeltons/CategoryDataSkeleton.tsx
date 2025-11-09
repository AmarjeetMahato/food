import React from "react";
import { View, FlatList } from "react-native";

const ITEM_WIDTH = 110; // Replace with the actual ITEM_WIDTH you use
const skeletonData = Array.from({ length: 9 }); // Number of skeleton cards to show

 const CategoryDataSkeleton = () => {
  return (
    <View className="flex-1 px-4 pt-4">
      <FlatList
        data={skeletonData}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        columnWrapperStyle={{ gap: 12 }}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={() => (
          <View className="flex-1 animate-pulse" style={{ maxWidth: ITEM_WIDTH }}>
            <View className="bg-gray-200 rounded-2xl overflow-hidden shadow-md">
              {/* Image Skeleton */}
              <View className="bg-gray-300" style={{ width: "100%", height: ITEM_WIDTH }} />

              {/* Card Content Skeleton */}
              <View className="p-2">
                <View className="bg-gray-300 h-3 rounded w-3/4 mb-1" />
                <View className="bg-gray-300 h-3 rounded w-1/2" />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CategoryDataSkeleton;

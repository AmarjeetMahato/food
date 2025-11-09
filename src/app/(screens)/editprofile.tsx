import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { Camera, Edit2 } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Validation Schema
const profileSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  gender: z.string().nonempty("Please select your gender"),
  dateOfBirth: z.string().nonempty("Please enter your date of birth"),
  favoriteCuisine: z.string().nonempty("Please select your favorite cuisine"),
  dietaryPreference: z.string().nonempty("Please select your dietary preference"),
});

type ProfileData = z.infer<typeof profileSchema>;
type EditMode = { [K in keyof ProfileData]: boolean };

export default function EditProfile() {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "9876543210",
      gender: "Male",
      dateOfBirth: "15/03/1995",
      favoriteCuisine: "Indian",
      dietaryPreference: "Non-Veg",
    },
  });

  const [editMode, setEditMode] = useState<EditMode>({
    fullName: false,
    email: false,
    phoneNumber: false,
    gender: false,
    dateOfBirth: false,
    favoriteCuisine: false,
    dietaryPreference: false,
  });

  const toggleEdit = (field: keyof EditMode) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const onSubmit = (data: ProfileData) => {
    console.log("✅ Profile Updated:", data);
  };

  // ⏺️ Text Field Renderer
  const renderField = (
    label: string,
    field: keyof ProfileData,
    required = false,
    placeholder = ""
  ) => {
    const isEditing = editMode[field];
    const value = watch(field);

    return (
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-gray-600 text-sm font-medium">
            {label} {required && <Text className="text-orange-500">*</Text>}
          </Text>
          <TouchableOpacity onPress={() => toggleEdit(field)} className="p-1 rounded">
            <Edit2 size={18} color="#ff6b35" />
          </TouchableOpacity>
        </View>

        <Controller
          control={control}
          name={field}
          render={({ field: { onChange, value } }) =>
            isEditing ? (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                className="w-full text-gray-900 text-base py-2 border-b-2 border-orange-500 bg-transparent"
                autoFocus
              />
            ) : (
              <Text className="text-gray-900 text-base py-2 border-b border-gray-300">
                {value || "Not set"}
              </Text>
            )
          }
        />
        {errors[field] && (
          <Text className="text-red-500 text-xs mt-1">
            {errors[field]?.message?.toString()}
          </Text>
        )}
      </View>
    );
  };

  // ⏺️ Dropdown Field Renderer
  const renderDropdownField = (
    label: string,
    field: keyof ProfileData,
    options: string[]
  ) => {
    const isEditing = editMode[field];
    const value = watch(field);

    return (
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-gray-600 text-sm font-medium">{label}</Text>
          <TouchableOpacity onPress={() => toggleEdit(field)} className="p-1 rounded">
            <Edit2 size={18} color="#ff6b35" />
          </TouchableOpacity>
        </View>

        {isEditing ? (
          <View className="border-b-2 border-orange-500">
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => setValue(field, option)}
                className={`py-2 ${value === option ? "bg-orange-100" : ""}`}
              >
                <Text className="text-gray-800">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text className="text-gray-900 text-base py-2 border-b border-gray-300">
            {value || "Not set"}
          </Text>
        )}
        {errors[field] && (
          <Text className="text-red-500 text-xs mt-1">
            {errors[field]?.message?.toString()}
          </Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView
      className="flex-1 bg-white px-6 py-8"
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Image */}
      <View className="flex items-center mb-8">
        <View className="relative">
          <View className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <Image
              className="w-full h-full"
              source={{
                uri: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=60&w=600",
              }}
            />
          </View>

          <TouchableOpacity className="absolute bottom-0 right-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <Camera size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text className="text-gray-500 text-sm mt-3">Upload Profile Picture</Text>
      </View>

      {/* Basic Info */}
      <View className="mb-8">
        <Text className="text-xl font-bold text-gray-800 mb-4">Basic Information</Text>
        {renderField("Full Name", "fullName", true, "Enter your full name")}
        {renderField("Email Address", "email", true, "Enter your email")}
        {renderField("Phone Number", "phoneNumber", true, "Enter your phone")}
      </View>

      {/* Personal Preferences */}
      <View className="mb-8">
        <Text className="text-xl font-bold text-gray-800 mb-4">Personal Preferences</Text>
        {renderDropdownField("Gender", "gender", [
          "Male",
          "Female",
          "Other",
          "Prefer not to say",
        ])}
        {renderField("Date of Birth", "dateOfBirth", false, "DD/MM/YYYY")}
        {renderDropdownField("Favorite Cuisine", "favoriteCuisine", [
          "Indian",
          "Chinese",
          "Italian",
          "Mexican",
          "Thai",
          "Japanese",
          "Continental",
          "Mediterranean",
        ])}
        {renderDropdownField("Dietary Preference", "dietaryPreference", [
          "Veg",
          "Non-Veg",
          "Vegan",
          "Jain",
          "Eggetarian",
          "Gluten-Free",
        ])}
      </View>

      {/* Submit */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="w-full bg-orange-500 rounded-xl py-4 items-center justify-center"
      >
        <Text className="text-white font-semibold text-base">Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

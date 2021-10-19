import React from 'react';
import NutritionCard from './NutritionCard';
import NutritionCarousel from './NutritionCarousel';
import NutritionHeroCarousel from './NutritionHeroCarousel';
const Nutrition = () => {
  return (
    <div style={{ paddingBottom: '66px' }}>
      <NutritionHeroCarousel />
      <div className='my-6'>
        <NutritionCarousel />
      </div>
      <div className='flex  flex-wrap'>
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
        <NutritionCard
          bg='red'
          image='https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp'
        />
      </div>
    </div>
  );
};

export default Nutrition;

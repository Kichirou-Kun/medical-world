import React from 'react';
import Accessories from '../components/ui/accessories/Accessories';
import BannerAds from '../components/ui/banner-ads/BannerAds';
import BannerItem from '../components/ui/banner/Banner';
import BuyOneGetOne from '../components/ui/buyone-getone/BuyOneGetOne'
import Categories from '../components/ui/categories/Categories'
import FamilyHospital from '../components/ui/family-hospital/FamilyHospital';
import FamilyUnform from '../components/ui/family-uniform/FamilyUnform';
import Littmann from '../components/ui/littmann/Littmann';
import NewArrivals from '../components/ui/new-arrivals/NewArrivals'
import Promotions from '../components/ui/promotions/Promotions'
import Reward from '../components/ui/reward/Reward'
import SecurityUniform from '../components/ui/security-uniform/SecurityUniform';

const Home = () => {
    return (
        <>
            <BannerItem />
            <Categories />
            <Promotions />
            <NewArrivals />
            <BuyOneGetOne />
            <Reward />
            <BannerAds />
            <FamilyUnform />
            <Accessories />
            <FamilyHospital />
            <Littmann />
            <SecurityUniform />
        </>
    )
}

export default Home

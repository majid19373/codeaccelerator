مساله پنجم - لیست کاربرانی که هیچ سفارشی ندارند
بخش مارکتینگ از ما خواسته است لیست کاربرانی در یک ماه اخیر ثبت نام کرده اند و هیچ سفارشی تا به حال ثبت نکرده اند را در اختیار آنان قرار دهیم تا یک ایمیل شامل تخفیف ویژه برای آنها ارسال شود. لطفا یک کوئری با SQL بنویسید که این لیست را در خروجی تولید کنید.

جدول کاربران
id | شناسه کاربر
full_name | نام و نام خانوادگی
email | ایمیل
phone | شماره تلفن
register_date | تاریخ ثبت نام
جدول سفارش
شناسه سفارش | id
شناسه کاربر | user_id
قیمت سفارش | order_price
تاریخ ثبت سفارش | order_created_at
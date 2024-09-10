import React from "react";

type AboutTypes = {
  about: boolean | null;
};

const About: React.FC<AboutTypes> = ({ about }) => {
  return (
    <>
      {about && (
        <p className="mt-5 px-4 mb-32  opacity-75 leading-loose">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. از طراحان گرافیک است.
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
          ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
          آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
          بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
          در زبان فارسی ایجاد کرد. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      )}
      ;
    </>
  );
};

export default About;
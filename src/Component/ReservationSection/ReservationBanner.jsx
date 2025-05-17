import banner from '../../assets/reservation-banner-1.jpeg'
import SharedBanner from '../../SharedSection/SharedBanner';

const ReservationBanner = () => {
    return (
          <div>
             <SharedBanner 
              banner={banner}
              heading="Dine With Us!!"
              subHeading="Plan your perfect dining experience with ease. Book a table in advance and let us serve you with comfort, care, and unforgettable flavors."
             ></SharedBanner>
          </div>
    );
};

export default ReservationBanner;
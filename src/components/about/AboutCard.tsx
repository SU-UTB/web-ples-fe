import { InfoCard } from '../cards/InfoCard';

export const AboutCard = () => {
  return (
    <InfoCard headline="O PLESE:">
      <div className="flex flex-col order-1 gap-4">
        <p>
          Srdečně vás zveme na XXIII. ročník Reprezentačního plesu 
          Univerzity Tomáše Bati, který se uskuteční 14. února 2025. 
        </p>
        <p>
          Tento den přímo vybízí k tomu, aby Kongresové centrum ve Zlíně ožilo romantikou, 
          která připomíná kouzelnou atmosféru Paříže – města lásky. 
          Vzduchem se bude nést rytmus písně Love Is in the Air, 
          který dokonale podtrhne večer plný nezapomenutelných zážitků.
        </p>
        {/* <p>
          Aktuální dění a novinky najdete na našem&nbsp; 
          <a
            href='https://www.instagram.com/studentskaunieutb'
            target='_blank'
            className='font-bold underline'
          >
            Instagramu
          </a>
            &nbsp;a&nbsp; 
          <a
            href="" //doplnit
            target="_blank"
            className="font-bold underline"
          >
            Facebookové události.
          </a>
        </p> */}
      </div>
    </InfoCard>
  );
};

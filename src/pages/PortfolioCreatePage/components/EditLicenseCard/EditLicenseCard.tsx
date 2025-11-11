import * as E from './EditLicenseCard.styles';

const EditLicenseCard = () => {
  const LICENSELIST = [
    { id: '1', text: '국가공인그래픽자격증 GTQ 1급' },
    { id: '2', text: '국가공인그래픽자격증 GTQ 1급' },
    { id: '3', text: '국가공인그래픽자격증 GTQ 1급' },
    { id: '4', text: '국가공인그래픽자격증 GTQ 1급' },
    { id: '5', text: '국가공인그래픽자격증 GTQ 1급' },
    { id: '6', text: '국가공인그래픽자격증 GTQ 1급' },
    { id: '7', text: '국가공인그래픽자격증 GTQ 1급' },
  ];

  return (
    <E.EditLicenseCard>
      <p className="h3-bold">자격증</p>

      <E.ItemWrapper>
        {LICENSELIST.map((license) => (
          <div key={license.id} className="b1-bold">
            {license.text}
          </div>
        ))}
      </E.ItemWrapper>
    </E.EditLicenseCard>
  );
};

export default EditLicenseCard;

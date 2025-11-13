import useGetMeLicenses from '@/hooks/queries/PortfolioCreatePage/useGetMeLicenses';
import * as E from './EditLicenseCard.styles';
import type { ResponseGetPortfolio } from '@/types/PortfolioCreatePage/edit';

interface EditLicenseCardProps {
  data?: ResponseGetPortfolio;
  editable?: boolean;
}

const EditLicenseCard = ({ data, editable }: EditLicenseCardProps) => {
  console.log(data);

  // 내 자격증 목록 조회
  const { data: LicenseData } = useGetMeLicenses();

  return (
    <E.EditLicenseCard>
      <p className="h3-bold">자격증</p>

      <E.ItemWrapper>
        {editable &&
          LicenseData?.data.map((license) => (
            <div key={license.licenseId} className="b1-bold">
              {license.name}
            </div>
          ))}

        {/* {!editable && (

          )} */}
      </E.ItemWrapper>
    </E.EditLicenseCard>
  );
};

export default EditLicenseCard;

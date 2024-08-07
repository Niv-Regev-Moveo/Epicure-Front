import PageTitle from "../../components/Common/PageTitle";
import { StyledPageContainer } from "./styles";
import CardChef from "./CardChef";
import { StyledCardWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchChefs } from "../../redux/chunk/collections/chefs/chefs.thunks";
import { useEffect, useMemo } from "react";

const ChefsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { chefs, loading, error } = useSelector(
    (state: RootState) => state.chefsState
  );

  useEffect(() => {
    dispatch(fetchChefs());
  }, [dispatch]);

  const chefCardsData = useMemo(() => {
    return chefs.map((chef: { name: string; image: string }) => ({
      name: chef.name,
      image: chef.image,
    }));
  }, [chefs]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <StyledPageContainer>
      <PageTitle title="CHEFS" />

      {chefCardsData.map((chef, index) => (
        <StyledCardWrapper key={index}>
          <CardChef name={chef.name} image={chef.image} />
        </StyledCardWrapper>
      ))}
    </StyledPageContainer>
  );
};

export default ChefsPage;

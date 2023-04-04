import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCountries} from "../store/countries/countries-actions";
import {selectAllCountries} from "../store/countries/countries-selectors";

export const HomePage = () => {
  const navigate = useNavigate();

  const countries = useSelector(selectAllCountries);

  const dispatch = useDispatch();

  useState(
      dispatch(loadCountries())
  )

  return (
    <>
      <Controls />

      <List on>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>
    </>
  );
};

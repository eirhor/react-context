import {AppSettings} from '../appconfig';
import {IPagedPeopleResponse, IPeopleResponse} from '../types/people';

export class PeopleService {
    public static GetAll = (): Promise<IPagedPeopleResponse> => {
        return fetch(AppSettings.Endpoints.People)
            .then(r => {
                if (!r.ok){
                    throw new Error(r.statusText);
                }
                return r.json();
            })
            .then(d => {
                return d.data as IPagedPeopleResponse;
            })

    }

    public static GetById = (id: number): Promise<IPeopleResponse> => {
        return fetch(`${AppSettings.Endpoints.People}/${id}`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(r.statusText);
                }
                return r.json();
            })
            .then(d => {
                return d.data as IPeopleResponse;
            })
    }
}
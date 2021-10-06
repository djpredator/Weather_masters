
export interface features{
    properties:detailsModel;
    
  }
export interface detailsModel{
    areaDesc: String,
    event: string,
    headline: string,
    severity: string,
    features:features[]
    
}
// export interface areaAlert{
    
// }
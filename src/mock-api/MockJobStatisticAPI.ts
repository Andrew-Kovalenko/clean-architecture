/* eslint-disable */
export class MockJobStatisticAPI {
    private jobStatistic = [
        {
            "profileId": "id1",
            "workedHoursAmount": 120,
            "availableVacationAmount": 0,
            "usedPaidVacationAmount": 2,
            "averageEfficient": 0.60
        },
        {
            "profileId": "id2",
            "workedHoursAmount": 110,
            "availableVacationAmount": 5,
            "usedPaidVacationAmount": 0,
            "averageEfficient": 0.75
        },
        {
            "profileId": "id3",
            "workedHoursAmount": 140,
            "availableVacationAmount": 10,
            "usedPaidVacationAmount": 0,
            "averageEfficient": 0.50
        },
        {
            "profileId": "id4",
            "workedHoursAmount": 100,
            "availableVacationAmount": 4,
            "usedPaidVacationAmount": 0,
            "averageEfficient": 0.9
        }
    ]

    getJobStatistic(): any {
        return this.jobStatistic
    }
}

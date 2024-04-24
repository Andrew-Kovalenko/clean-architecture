/* eslint-disable */
export class MockProfilesAPI {
    private profiles = [
        {
        'id': 'id1',
        'name': 'Tarzan',
        'role': 'JUNIOR',
        },
        {
            'id': 'id2',
            'name': 'John',
            'role': 'JUNIOR',
        },
        {
            'id': 'id3',
            'name': 'Ben',
            'role': 'SENIOR',
        },
        {
            'id': 'id4',
            'name': 'Sara',
            'role': 'MIDDLE',
        },
    ]

    getProfiles(): any {
        return this.profiles
    }
}

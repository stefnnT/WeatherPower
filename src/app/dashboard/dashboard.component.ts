import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  
  showStatus(data) {

    //change this to popper or toastr
    console.log(data);
  }
  
  sites = [
    {
      id: 1,
      name: 'Fadeyi',
      location: {
        address: 'BRT station, Fadeyi',
        city: 'Lagos',
        country: 'Nigeria'
      },
      coordinates: {
        longitude: 3.1323,
        latitude: 6.3223
      },
      maintenancePersonnel: {
        firstName: 'Biodun',
        lastName: 'Okunade',
        phone: '08030000000',
        imageUrl: '/assets/images/maintenance\ team/biodunokunade.png',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        company: 'Intellectric'
      },
      contractor: {
        name: 'Intellectric',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        phone: '08033000000'
      }
    },

    {
      id: 2,
      name: 'Ojota',
      location: {
        address: 'BRT station, Ojota',
        city: 'Lagos',
        country: 'Nigeria'
      },
      coordinates: {
        longitude: 3.2323,
        latitude: 6.3223
      },
      maintenancePersonnel: {
        firstName: 'Biodun',
        lastName: 'Okunade',
        phone: '08030000000',
        imageUrl: '/assets/images/maintenance\ team/biodunokunade.png',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        company: 'Intellectric'
      },
      contractor: {
        name: 'Intellectric',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        phone: '08033000000'
      }
    },
    
    {
      id: 3,
      name: 'Onipan',
      location: {
        address: 'BRT station, Onipan',
        city: 'Lagos',
        country: 'Nigeria'
      },
      coordinates: {
        longitude: 3.4323,
        latitude: 6.1223
      },
      maintenancePersonnel: {
        firstName: 'Biodun',
        lastName: 'Okunade',
        phone: '08030000000',
        imageUrl: '/assets/images/maintenance\ team/biodunokunade.png',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        company: 'Intellectric'
      },
      contractor: {
        name: 'Intellectric',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        phone: '08033000000'
      }
    },{
      id: 4,
      name: 'Ketu',
      location: {
        address: 'BRT station, Ketu',
        city: 'Lagos',
        country: 'Nigeria'
      },
      coordinates: {
        longitude: 3.4323,
        latitude: 6.4223
      },
      maintenancePersonnel: {
        firstName: 'Biodun',
        lastName: 'Okunade',
        phone: '08030000000',
        imageUrl: '/assets/images/maintenance\ team/biodunokunade.png',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        company: 'Intellectric'
      },
      contractor: {
        name: 'Intellectric',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        phone: '08033000000'
      }
    },
    
    {
      id: 5,
      name: 'Obanikoro',
      location: {
        address: 'BRT station, Obanikoro',
        city: 'Lagos',
        country: 'Nigeria'
      },
      coordinates: {
        longitude: 4.3323,
        latitude: 6.7223
      },
      maintenancePersonnel: {
        firstName: 'Biodun',
        lastName: 'Okunade',
        phone: '08030000000',
        imageUrl: '/assets/images/maintenance\ team/biodunokunade.png',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        company: 'Intellectric'
      },
      contractor: {
        name: 'Intellectric',
        location: {
          address: 'Femi Kareem drive',
          city: 'Lagos',
          country: 'Nigeria'
        },
        phone: '08033000000'
      }
    }
  ]

}

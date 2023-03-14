import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';

const listMascotas: Mascota[] = [
  { nombre: 'Alegría', edad: 3, raza: 'golden', color: 'dorado', peso: 13 },
  { nombre: 'Max', edad: 2, raza: 'labrador', color: 'negro', peso: 25 },
  { nombre: 'Bella', edad: 1, raza: 'poodle', color: 'blanco', peso: 8 },
  { nombre: 'Rocky', edad: 4, raza: 'bulldog', color: 'marrón', peso: 20 },
  { nombre: 'Luna', edad: 5, raza: 'husky', color: 'blanco y negro', peso: 22 },
  {
    nombre: 'Charlie',
    edad: 6,
    raza: 'dálmata',
    color: 'blanco y negro',
    peso: 18,
  },
  {
    nombre: 'Lucas',
    edad: 2,
    raza: 'pastor alemán',
    color: 'negro y marrón',
    peso: 30,
  },
  { nombre: 'Coco', edad: 1, raza: 'chihuahua', color: 'marrón', peso: 3 },
  { nombre: 'Simba', edad: 3, raza: 'persa', color: 'naranja', peso: 5 },
  {
    nombre: 'Gizmo',
    edad: 2,
    raza: 'siamés',
    color: 'blanco y marrón',
    peso: 4,
  },
  {
    nombre: 'Oliver',
    edad: 1,
    raza: 'british shorthair',
    color: 'gris',
    peso: 6,
  },
  {
    nombre: 'Milo',
    edad: 2,
    raza: 'ragdoll',
    color: 'blanco y marrón',
    peso: 7,
  },
  {
    nombre: 'Toby',
    edad: 5,
    raza: 'beagle',
    color: 'marrón y blanco',
    peso: 15,
  },
];
@Component({
  selector: 'app-lista-mascota',
  templateUrl: './lista-mascota.component.html',
  styleUrls: ['./lista-mascota.component.scss'],
})
export class ListaMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

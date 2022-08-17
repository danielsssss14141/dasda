<?php
class Clasea
{
    private $ip;
    private $subredes;
    private $oct1;
    private $bits;
    private $bin1;
    private $bin2;
    private $bin3;
    private $bin4;
    private $saltos;
    private $hostt;
    private $hostu;

    function __construct()
    {
        $this->bin1 = 255;
        $this->bin2 = 0;
        $this->bin3 = 0;
        $this->bin4 = 0;
    }

    function extraerdatos()
    {
        $this->ip = $_POST['ip'];
        $this->subredes = $_POST['subredes'];
    }

    function calcularBits()
    {
        for ($i = 1; $i < 100; $i++) {
            if (pow(2, $i) >= $this->subredes) {
                $this->bits = $i;
                break;
            }
        }
    }

    function nuevaMascara()
    {
        $j = 7;
        $bit = $this->bits - 8;
        if ($this->bits <= 8) {
            for ($i = 0; $i < 8; $i++) {
                if ($i < $this->bits) {
                    $this->bin2 += pow(2, $j);
                    $j--;
                } else {
                    break;
                }
            }
        } else if ($this->bits <= 16) {
            $this->bin2 = 255;
            for ($i = 0; $i < 8; $i++) {
                if ($i < $bit) {
                    $this->bin3 += pow(2, $j);
                    $j--;
                } else {
                    break;
                }
            }
        }
    }

    function calcularSaltos()
    {
        if ($this->bits <= 8) {
            $this->saltos = (256 - $this->bin2);
        } else if ($this->bits <= 16) {
            $this->saltos = (256 - $this->bin3);
        } else if ($this->bits <= 24) {
        } 
    }

    function hallarHostsTotal()
    {
        $exp = 32 - (8 + $this->bits);
        $this->hostt = pow(2, $exp);
    }

    function hallarHostsUtiles()
    {
        $this->hostu = ($this->hostt - 2);
    }

    function getHostt()
    {
        return $this->hostt;
    }

    function getHostu()
    {
        return $this->hostu;
    }

    function getSaltos()
    {
        return $this->saltos;
    }

    function getBin1()
    {
        return $this->bin1;
    }

    function getBin2()
    {
        return $this->bin2;
    }

    function getBin3()
    {
        return $this->bin3;
    }

    function getBin4()
    {
        return $this->bin4;
    }

    function getBits()
    {
        return $this->bits;
    }

    function getIp()
    {
        return $this->ip;
    }

    function getSubredes()
    {
        return $this->subredes;
    }

    function hallarOct1()
    {
        $this->oct1 = number_format((float) $this->ip);
    }

    function getOct1()
    {
        return $this->oct1;
    }

    function getOct2()
    {
        return 0;
    }

    function getOct3()
    {
        return 0;
    }

    function getOct4()
    {
        return 0;
    }
}
